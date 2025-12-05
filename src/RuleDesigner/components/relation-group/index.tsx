import React from 'react'
import { Form } from 'antd'
import { FormListFieldData } from 'antd/es/form'
import Regular from '../regular'
import Condition from '../condition'
import { IBaseNames, IFieldOption, RULE_ITEM_TYPE_ENUM } from '../../common'

import './index.scss'

interface IRelationGroupProps {
  baseName?: IBaseNames
  fieldOption: IFieldOption
  add: (defaultValue?: any, insertIndex?: number | undefined) => void
  remove: (index: number | number[]) => void
  fields: FormListFieldData[]
}

export const RelationGroup: React.FC<IRelationGroupProps> = (props) => {
  const { baseName = [] } = props

  // const prefixCls = 'mole-ui-filter-conditions-relation-group'

  return (
    <Form.Item shouldUpdate noStyle>
      {({ getFieldValue }) => {
        const conditionType = getFieldValue([...baseName, 'type'])
        if (conditionType === RULE_ITEM_TYPE_ENUM.REGULAR) {
          return <Regular {...props} />
        }
        return <Condition {...props} />
      }}
    </Form.Item>
  )
}

export default RelationGroup
