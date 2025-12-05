import { FormItemProps } from 'antd/es/form'
import { RULE_ITEM_TYPE_ENUM, OPERATOR_MODE_ENUM, CONDITION_ENUM, DATA_TYPE_ENUM } from './enum'

export interface IRuleData {
  type: RULE_ITEM_TYPE_ENUM
  operator?: OPERATOR_MODE_ENUM
  children?: IRuleData[]
  rule?: {
    column: string
    operator: CONDITION_ENUM
    dataType?: DATA_TYPE_ENUM
    value?: any
    valueType?: string
  }
}

export interface IFieldData {
  /**
   * 字段名，必须，须保持唯一
   */
  fieldName: string
  /**
   * 字段展示名称，必须
   */
  fieldDisplayName: string
  /**
   * 字段数据类型，必须
   */
  fieldDataType: string
  /**
   * 表单字段是否必填
   */
  required?: boolean
  /**
   * 表单字段是否禁用
   */
  disabled?: boolean
  /**
   * 数据组件的默认 props
   */
  componentProps?: Record<string, any>
  /**
   * Schema 配置，依赖低代码渲染能力渲染数据提交组件，如果有该配置，则依赖低代码组件渲染
   */
  schema?: Record<string, any>
  /**
   * 扩展数据
   */
  extra?: Record<string, any>
  field?: Record<string, any>
}

export type IBaseNames = (string | number)[]

export interface IFormConfig {
  required?: boolean
  disabled?: boolean
}

export interface IFieldOption extends FormItemProps {
  fieldKey?: number | undefined
  key: number
}

export interface IComponentsMap {
  [k: string]: {
    [k: string]: {
      component: any
      componentProps: Record<string, any>
    }
  }
}
