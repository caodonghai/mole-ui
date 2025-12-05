import React from 'react'
import { Form } from 'antd'
import { FormListFieldData } from 'antd/es/form'
import RelationGroup from '../relation-group'
import RelationLine from '../relation-line'
import { IBaseNames, IFieldOption, RULE_ITEM_TYPE_ENUM } from '../../common'

import './index.scss'

interface IConditionProps {
  baseName?: IBaseNames
  fieldOption: IFieldOption
  add: (defaultValue?: any, insertIndex?: number | undefined) => void
  remove: (index: number | number[]) => void
  fields: FormListFieldData[]
}

export const Condition: React.FC<IConditionProps> = (props) => {
  const { baseName = [], fieldOption: preFieldOption, remove: preRemove } = props

  const prefixCls = 'mole-ui-filter-conditions-condition'

  const form = Form.useFormInstance()

  return (
    <div className={`${prefixCls}-box`}>
      <div>
        <Form.Item name={[preFieldOption.name, 'type']} hidden noStyle />
        <Form.Item name={[preFieldOption.name, 'operator']} noStyle>
          <RelationLine />
        </Form.Item>
      </div>
      <div>
        <Form.List name={[preFieldOption.name, 'children']}>
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map((fieldOption) => (
                  <RelationGroup
                    key={[...baseName, 'children', fieldOption.name].join()}
                    baseName={[...baseName, 'children', fieldOption.name]}
                    fieldOption={fieldOption}
                    add={add}
                    fields={fields}
                    remove={(curIndex) => {
                      remove(curIndex)
                      if (fields.length <= 1) {
                        preRemove(preFieldOption.name)
                      }
                      const currFieldVal = form.getFieldValue([...baseName])
                      let nextFieldValue: any = currFieldVal
                      if (
                        currFieldVal.type === RULE_ITEM_TYPE_ENUM.CONDITION &&
                        currFieldVal?.children?.length === 1 &&
                        currFieldVal?.children?.[0]?.type === RULE_ITEM_TYPE_ENUM.CONDITION
                      ) {
                        nextFieldValue = currFieldVal.children[0]
                        form.setFieldValue(baseName, nextFieldValue)
                      }
                    }}
                  />
                ))}
              </>
            )
          }}
        </Form.List>
      </div>
    </div>
  )
}

export default Condition
