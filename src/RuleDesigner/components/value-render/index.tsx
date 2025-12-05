import React, { useMemo, useContext, memo } from 'react'
import { Form } from 'antd'
import _ from 'lodash-es'
import { Context } from '../../common/context'
import { COMPONENTS_MAP, CONDITION_ENUM, IFieldData, IBaseNames, IFieldOption } from '../../common'

import './index.scss'

interface IValueRenderProps {
  fieldOption: IFieldOption
  column: string
  operator: string
  dataType: string
  baseName: IBaseNames
}

export const ValueRender: React.FC<IValueRenderProps> = (props) => {
  const { fieldOption, column, operator, dataType, baseName } = props

  const prefixCls = 'mole-ui-filter-conditions-value-render'

  const { fieldList = [], required: formRequired, disabled: formDisabled, renderValueCom } = useContext(Context)

  const form = Form.useFormInstance()

  const currentField = fieldList.find((i) => i.fieldName === column) || ({} as IFieldData)
  const { componentProps = {} } = currentField

  const { Component, baseComponentProps } = useMemo(() => {
    const { component: Component, componentProps: baseComponentProps } =
      COMPONENTS_MAP?.[dataType]?.[operator] || COMPONENTS_MAP?.[dataType]?.base || {}
    return {
      Component,
      baseComponentProps,
    }
  }, [operator, dataType])

  const onChangeValue = (nextV: Record<string, any>) => {
    if (!nextV || _.isEmpty(nextV)) return
    Object.keys(nextV).forEach((key) => {
      form.setFieldValue([...baseName, 'rule', key], nextV[key])
    })
  }

  if (operator === CONDITION_ENUM.IS_NULL || operator === CONDITION_ENUM.NOT_NULL) return null

  return (
    <div className={`${prefixCls}-box`}>
      {typeof renderValueCom === 'function' ? (
        renderValueCom(Component, {
          componentProps: { ...baseComponentProps, ...componentProps },
          field: currentField,
          fieldOption,
          baseName,
          curValues: form.getFieldValue([...baseName, 'rule']),
          required: formRequired || currentField?.required || false,
          disabled: formDisabled || currentField?.disabled || false,
          onChangeValue,
        })
      ) : (
        <Form.Item
          {...fieldOption}
          name={[fieldOption.name, 'rule', 'value']}
          rules={[{ required: formRequired || currentField?.required || false, message: '该字段是必填字段' }]}
        >
          {Component ? (
            <Component
              {...baseComponentProps}
              {...componentProps}
              disabled={formDisabled || currentField?.disabled || false}
            />
          ) : null}
        </Form.Item>
      )}
    </div>
  )
}

export default memo(ValueRender)
