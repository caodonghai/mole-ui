import React, { useContext, useEffect } from 'react'
import { Select, Form, Space, Button } from 'antd'
import { FormListFieldData } from 'antd/es/form'
import { EditOutlined } from '@ant-design/icons'
import _ from 'lodash-es'
import {
  IFieldData,
  OPERATOR_MODE_ENUM,
  RULE_ITEM_TYPE_ENUM,
  IBaseNames,
  IFieldOption,
  getCurrDepthByPathnames,
} from '../../common'

import { Context } from '../../common/context'
import ValueRender from '../value-render'

import './index.scss'

interface IRegularProps {
  baseName?: IBaseNames
  fieldOption: IFieldOption
  add: (defaultValue?: any, insertIndex?: number | undefined) => void
  remove: (index: number | number[]) => void
  fields: FormListFieldData[]
}

export const Regular: React.FC<IRegularProps> = ({ fieldOption, baseName = [], add, remove }) => {
  const prefixCls = 'mole-ui-filter-conditions-regular'

  const {
    fieldList = [],
    maxDepth,
    fleldConditionMaps,
    disabled: formDisabled,
    required: formRequired,
    disabledField,
    disabledOperator,
    hiddenAddBtn,
    operateOptionsDefault,
    selectColumnInit,
    getConditions,
  } = useContext(Context)

  const form = Form.useFormInstance()

  const currDepth = getCurrDepthByPathnames(baseName)

  const allowAddGroup = currDepth < maxDepth

  const [isColumnDelete, setIsColumnDelete] = React.useState(false)
  const value = _.get(form.getFieldsValue(), [...baseName, 'rule', 'column'])

  useEffect(() => {
    if (value !== undefined) {
      setIsColumnDelete(!_.find(fieldList, (item) => item.fieldName === value))
    }
  }, [value])

  const columnValue = _.get(form.getFieldsValue(), [...baseName, 'rule', 'column'])
  return (
    <div className={`${prefixCls}-box`}>
      <Space align="center" style={{ width: '100%' }}>
        <Form.Item
          {...fieldOption}
          name={[fieldOption.name, 'rule', 'column']}
          rules={[{ required: formRequired, message: '该字段是必填字段' }]}
        >
          <Select
            showSearch
            optionFilterProp="fieldDisplayName"
            style={{ width: 180 }}
            placeholder="请选择字段"
            className={isColumnDelete ? 'select-is-delete' : ''}
            options={
              isColumnDelete
                ? [
                    {
                      fieldDisplayName: `[${columnValue}]已删除`,
                      fieldName: columnValue,
                      disabled: true,
                    },
                    ...fieldList,
                  ]
                : fieldList
            }
            disabled={formDisabled || disabledField}
            fieldNames={{ label: 'fieldDisplayName', value: 'fieldName' }}
            onChange={(v, info) => {
              form.setFieldValue([...baseName, 'rule'], {
                column: v,
                dataType: (info as IFieldData)?.fieldDataType,
                ...(selectColumnInit?.(v, info) || {}),
              });
            }}
          />
        </Form.Item>
        <Form.Item noStyle shouldUpdate>
          {({ getFieldValue }) => {
            const columnValue = getFieldValue([...baseName, 'rule', 'column']);
            const curValues = getFieldValue([...baseName, 'rule']);
            const columnDataType = getFieldValue([
              ...baseName,
              'rule',
              'dataType',
            ]);
            const operateOptions =
              operateOptionsDefault ||
              getConditions?.(
                curValues,
                _.find(fieldList, (item) => item.fieldName === columnValue),
              ) ||
              fleldConditionMaps?.[columnDataType] ||
              [];
            if (!columnDataType) return null;
            return (
              <Form.Item
                {...fieldOption}
                name={[fieldOption.name, 'rule', 'operator']}
                rules={[
                  { required: formRequired, message: '该字段是必填字段' },
                ]}
              >
                <Select
                  placeholder="请选择"
                  style={{ width: 100 }}
                  disabled={formDisabled || disabledOperator}
                  options={operateOptions}
                  onChange={(v) => {
                    form.setFieldValue([...baseName, 'rule'], {
                      ...curValues,
                      operator: v,
                      value: undefined,
                    });
                  }}
                />
              </Form.Item>
            );
          }}
        </Form.Item>
        <Form.Item noStyle shouldUpdate>
          {({ getFieldValue }) => {
            const { dataType, operator, column } =
              getFieldValue([...baseName, 'rule']) || {};
            if (!column || !dataType || !operator) return null;
            return (
              <ValueRender
                column={column}
                operator={operator}
                dataType={dataType}
                fieldOption={fieldOption}
                baseName={baseName}
              />
            );
          }}
        </Form.Item>
        {!formDisabled && !disabledField && !hiddenAddBtn && (
          <Form.Item>
            <Space align="center">
              {disabledField ? null : (
                <EditOutlined
                  size={20}
                  onClick={() => remove(fieldOption.name)}
                />
              )}
              <Button
                type="link"
                style={{ padding: 0 }}
                onClick={() =>
                  add(
                    {
                      type: RULE_ITEM_TYPE_ENUM.REGULAR,
                      rule: {},
                    },
                    fieldOption.name + 1,
                  )
                }
                block
              >
                +添加
              </Button>
              {!allowAddGroup ? null : (
                <Button
                  type="link"
                  style={{ padding: 0 }}
                  disabled={!allowAddGroup}
                  onClick={() => {
                    if (allowAddGroup) {
                      add(
                        {
                          type: RULE_ITEM_TYPE_ENUM.CONDITION,
                          operator: OPERATOR_MODE_ENUM.and,
                          children: [
                            {
                              type: RULE_ITEM_TYPE_ENUM.REGULAR,
                              rule: {},
                            },
                          ],
                        },
                        fieldOption.name + 1,
                      );
                    }
                  }}
                  block
                >
                  +添加组
                </Button>
              )}
            </Space>
          </Form.Item>
        )}
      </Space>
    </div>
  );
}

export default Regular
