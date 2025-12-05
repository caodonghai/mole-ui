
import { Form, Select, Space } from 'antd';
import React, { Fragment } from 'react';
import { CONDITION_ENUM } from 'mole-ui';
import _ from 'lodash-es';

import { baseComponentProps } from './const';
import { IValueSwitchGroup, IBaseNames, IFieldOption } from './interface';
import VariableSelect from './variable-select';

interface ISwitchGroupProps {
  options: IValueSwitchGroup[];
  componentProps?: Record<string, any>;
  field?: any;
  fieldOption?: IFieldOption;
  curValues?: Record<string, any>;
  baseName: IBaseNames;
  baseComponent?: any;
  required?: boolean;
  disabled?: boolean;
  onChangeValue: (nextV: Record<string, any>) => void;
  fillDefaultValue?: boolean;
}

export const SwitchGroup = (props: ISwitchGroupProps) => {
  const {
    baseComponent: BaseComponent,
    options,
    componentProps: _componentProps,
    curValues,
    field,
    fieldOption,
    required = false,
    baseName,
    onChangeValue,
    fillDefaultValue,
  } = props;

  const componentProps = { ...baseComponentProps, ..._componentProps };


  const truthDataType =
    field?.field?.dataType ||
    curValues?.dataType ||
    field.dataType;

  const Component = BaseComponent || Fragment;

  const getTreeData = (_valueType) => {
    let dataSource = _.cloneDeep(
      options?.find((ele) => ele?.value === _valueType)?.treeData || [],
    );
    return dataSource;
  };

  return (
    <Space.Compact block style={{ whiteSpace: 'nowrap' }}>
      <Form.Item
        {...fieldOption}
        style={{ width: 110 }}
        initialValue={options?.[0]?.value}
        key={fieldOption.key + 'valueType'}
        name={[fieldOption.name, 'rule', 'valueType']}
        rules={[{ required, message: '该字段必填' }]}
      >
        <Select
          popupMatchSelectWidth={false}
          options={options}
          placeholder="请选择"
          onChange={(v) => {
            onChangeValue({
              valueType: v,
              value: undefined,
            });
          }}
        />
      </Form.Item>
      <Form.Item
        noStyle
        dependencies={[
          [...baseName, 'rule', 'valueType'],
          [[...baseName, 'rule', 'operator']],
        ]}
      >
        {({ getFieldValue }) => {
          const _valueType = getFieldValue([...baseName, 'rule', 'valueType']);
          const _operator = getFieldValue([...baseName, 'rule', 'operator']);
          const treeDataMemo = getTreeData(_valueType);

          if (!_valueType) {
            onChangeValue({
              valueType: 'custom',
              value: undefined,
            });
            return null;
          }

          if (_valueType === 'custom') {
            return (
              <Form.Item
                {...fieldOption}
                key={fieldOption.key + _operator + _valueType + 'value'}
                name={[fieldOption.name, 'rule', 'value']}
              >
                <Component
                  curField={field}
                  dataType={truthDataType}
                  curValues={curValues}
                  {...componentProps}
                />
              </Form.Item>
            );
          }
          return (
            <Form.Item
              {...fieldOption}
              key={fieldOption.key + 'value'}
              name={[fieldOption.name, 'rule', 'value']}
            >
              <VariableSelect
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeDataMemo}
                popupMatchSelectWidth={false}
                doubleSelect={curValues?.operator === CONDITION_ENUM.BETWEEN}
                {...componentProps}
                multiple={false}
                placeholder="请选择"
                curValues={curValues}
                fillDefaultValue={fillDefaultValue}
              />
            </Form.Item>
          );
        }}
      </Form.Item>
    </Space.Compact>
  );
};

export default SwitchGroup;
