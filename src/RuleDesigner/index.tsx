import React, { useLayoutEffect, CSSProperties, ReactNode, forwardRef, useImperativeHandle, useState } from 'react'
import { Form, Typography } from 'antd'
import classNames from 'classnames'
import _ from 'lodash-es'
import { IBaseNames, IFieldData, IFieldOption, IRuleData } from './common/interface'
import { RULE_ITEM_TYPE_ENUM, OPERATOR_MODE_ENUM, CONDITIONS_MAP } from './common'
import { RelationLine, RelationGroup } from './components'
import { Context } from './common/context'
import { usePrefix } from '../common'

import './index.scss'

export * from './common'

export interface IRuleDesignerProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
  /**
   * 字段列表；
   */
  fieldList: IFieldData[]
  /**
   * 初始化值
   */
  initValues?: IRuleData
  /**
   * 最大层级限制，当为大于0的正整数；默认为5
   */
  maxDepth?: number
  /**
   * 是否必填；
   */
  required?: boolean
  /**
   * 禁用用户输入，做展示用，全局禁用，优先级 字段本身disabled更优先；
   */
  disabled?: boolean
  /** 是否显示添加按钮 */
  hiddenAddBtn?: boolean
  /** 当右侧选项为唯一选项时 是否填充默认值 */
  fillDefaultValue?: boolean

  /** 规则操作符默认值 */
  operateOptionsDefault?: Array<{ label: string; value: string }>

  /** 选择左侧字段时触发的规则初始配置 */
  selectColumnInit?: (column: string, info: any) => any
  /**
   * 禁用用户修改字段选择；
   */
  disabledField?: boolean
  /**
   * 禁用用户修改条件；
   */
  disabledOperator?: boolean
  /**
   * 操作符映射Map
   */
  fleldConditionMaps?: Record<string, { label: string; value: string | number | boolean }[]>
  /**
   * 根据当前数据获取条件数据
   */
  getConditions?: (
    curV: IRuleData['rule'],
    fieldItem?: IFieldData
  ) => void | { label: string; value: string | number | boolean }[]
  /**
   * 自定义字段值组件渲染；
   * component：匹配到的组件
   * context: 当前上下文信息；
   */
  renderValueCom?: (
    /**
     * 条件命中的组件
     */
    component: any,
    context: {
      /**
       * 默认的组件参数
       */
      componentProps: Record<string, any>
      /**
       * 当前选中的字段数据
       */
      field: IFieldData
      /**
       * Form.List的配置
       */
      fieldOption: IFieldOption
      /**
       * 当前条件规则的pathname
       */
      baseName: IBaseNames
      /**
       * 表单是否必填
       */
      required?: boolean
      /**
       * 表单是否禁用
       */
      disabled?: boolean
      /**
       * 当前条件产生的数据
       */
      curValues?: Record<string, any>
      /**
       * 数据变化后的回调，可修改表单数据；
       */
      onChangeValue: (nextV: Record<string, any>) => void
    }
  ) => ReactNode
  /**
   * 数据变化回调；
   * currV： 当前变化的数据；
   * allV： 所有数据；
   */
  onValuesChange?: (currV: any, allV: IRuleData) => void
}

/**
 * 条件表达式规则配置
 * 通过ref向外暴露form，支持表单操作
 * 数据校验：form.validateFields().then((formDatas) => {})
 */
export const RuleDesigner = forwardRef(function RuleDesigner(props: IRuleDesignerProps, ref) {
  const {
    className: filterConditionsClassName,
    style,
    children,
    fieldList = [],
    initValues = {},
    required = false,
    disabled = false,
    disabledField = false,
    disabledOperator = false,
    hiddenAddBtn = false,
    fillDefaultValue,
    operateOptionsDefault,
    maxDepth = 5,
    fleldConditionMaps = CONDITIONS_MAP,
    onValuesChange,
    renderValueCom,
    getConditions = () => undefined,
    selectColumnInit,
  } = props

  const prefixCls = usePrefix('rule-designer');

  const [loading, setLoading] = useState<boolean>(true)

  const [form] = Form.useForm<IRuleData>()
  const formChildrenValue = Form.useWatch('children', form)

  useImperativeHandle(ref, () => ({
    form,
  }))

  const init = async () => {
    if (initValues && !_.isEmpty(initValues)) {
      await form.setFieldsValue(initValues)
    } else {
      await form.setFieldsValue({})
    }
    setLoading(false)
  }

  const setInitValue = () => {
    form.setFieldsValue({
      type: RULE_ITEM_TYPE_ENUM.CONDITION,
      operator: OPERATOR_MODE_ENUM.and,
      children: [
        {
          type: RULE_ITEM_TYPE_ENUM.REGULAR,
          rule: {},
        },
      ],
    })
  }

  useLayoutEffect(() => {
    init()
  }, [JSON.stringify(initValues)])

  const className = classNames(
    {
      [prefixCls]: true,
    },
    filterConditionsClassName
  )

  if (loading) return null

  const isChildrenEmpty = !formChildrenValue || _.isEmpty(formChildrenValue)

  return (
    <Context.Provider
      value={{
        fieldList,
        disabled,
        required,
        maxDepth,
        renderValueCom,
        getConditions,
        disabledField,
        hiddenAddBtn,
        fillDefaultValue,
        operateOptionsDefault,
        selectColumnInit,
        disabledOperator,
        fleldConditionMaps,
      }}
    >
      <div className={className} style={style}>
        <Form
          name="filter-conditions-form"
          form={form}
          disabled={disabled}
          onValuesChange={(currV: any, allV: IRuleData) => {
            onValuesChange?.(currV, allV)
          }}
          autoComplete="off"
        >
          <div className={`${prefixCls}-box`}>
            {isChildrenEmpty ? null : (
              <div>
                <Form.Item name={'type'} hidden noStyle />
                <Form.Item name={'operator'} noStyle hidden={maxDepth <= 1}>
                  <RelationLine />
                </Form.Item>
              </div>
            )}
            <div>
              <Form.List name={'children'}>
                {(fields, { add, remove }) => {
                  return (
                    <>
                      {fields.map((fieldOption) => (
                        <RelationGroup
                          key={fieldOption.key}
                          baseName={['children', fieldOption.name]}
                          fieldOption={fieldOption}
                          add={add}
                          remove={(fieldName) => {
                            remove(fieldName)
                            const currFieldVal = form.getFieldValue([])
                            let nextFieldValue: any = currFieldVal
                            if (
                              currFieldVal.type === RULE_ITEM_TYPE_ENUM.CONDITION &&
                              currFieldVal?.children?.length === 1 &&
                              currFieldVal?.children?.[0]?.type === RULE_ITEM_TYPE_ENUM.CONDITION
                            ) {
                              nextFieldValue = currFieldVal.children[0]
                              form.setFieldValue([], nextFieldValue)
                            }
                          }}
                          fields={fields}
                        />
                      ))}
                    </>
                  )
                }}
              </Form.List>
              {!isChildrenEmpty ? null : (
                <div onClick={setInitValue}>{children || <Typography.Link>+ 配置规则条件</Typography.Link>}</div>
              )}
            </div>
          </div>
        </Form>
      </div>
    </Context.Provider>
  )
})
RuleDesigner.displayName = 'RuleDesigner'
export default RuleDesigner
