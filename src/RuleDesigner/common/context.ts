import { ReactNode, createContext } from 'react'
import { IFieldOption, IFieldData, IBaseNames, IRuleData } from './interface'

interface IContext {
  fieldList: IFieldData[]
  /**
   * 是否必填
   */
  required: boolean
  /**
   * 禁用用户输入，做展示用
   */
  disabled: boolean
  /**
   * 禁用用户修改字段选择；同时会禁用操作项【添加、添加组、删除】
   */
  disabledField?: boolean
  /**
   * 禁用用户修改条件；
   */
  disabledOperator?: boolean
  /**
   * 自定义字段值组件渲染；
   * component：匹配到的组件
   * context: 当前上下文信息；
   */
  /** 是否显示添加按钮 */
  hiddenAddBtn?: boolean
  /** 当右侧选项为唯一选项时 是否填充默认值 */
  fillDefaultValue?: boolean

  /** 规则操作符默认值 */
  operateOptionsDefault?: Array<{ label: string; value: string }>
  /** 选择左侧字段时触发的规则初始配置 */
  selectColumnInit?: (column: string, info: any) => any
  maxDepth: number
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
}

export const Context = createContext<IContext>({
  fieldList: [],
  required: false,
  disabled: false,
  maxDepth: Infinity,
})
