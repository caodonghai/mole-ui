import React, { useContext } from 'react'
import classnames from 'classnames'
import { OPERATOR_MODE_ENUM, OPERATOR_MODE_MAP } from '../../common'
import { Context } from '../../common/context'

import './index.scss'

interface IRelationLineProps {
  value?: OPERATOR_MODE_ENUM
  onChange?: (value: OPERATOR_MODE_ENUM) => void
}

export const RelationLine: React.FC<IRelationLineProps> = ({ value, onChange }) => {
  const prefixCls = 'mole-ui-filter-conditions-relation-line'

  const disabled = useContext(Context)?.disabled

  const handlerClick = () => {
    let nextV = OPERATOR_MODE_ENUM.and
    if (value === OPERATOR_MODE_ENUM.and) nextV = OPERATOR_MODE_ENUM.or
    onChange?.(nextV)
  }

  return (
    <div className={`${prefixCls}-box`}>
      <div className={`${prefixCls}-box-relation`}>
        <div className={`${prefixCls}-box-relation-line`}>
          <span
            className={classnames({
              [`${prefixCls}-box-relation-line-span`]: true,
              [`${prefixCls}-box-relation-line-span-disabled`]: disabled,
            })}
            onClick={handlerClick}
          >
            {OPERATOR_MODE_MAP[value!]}
          </span>
        </div>
      </div>
    </div>
  )
}

export default RelationLine
