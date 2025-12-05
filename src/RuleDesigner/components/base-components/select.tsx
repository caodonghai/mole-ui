import React from 'react'
import { Select as AntSelect } from 'antd'
import { SelectProps } from 'antd/es/select'
import _ from 'lodash-es'

interface ISelectProps extends Omit<SelectProps, 'value' | 'onChange'> {
  value?: any[]
  onChange?: (v?: any[], opt?: any[]) => void
  multiple?: boolean
}

export const Select: React.FC<ISelectProps> = ({ value, onChange, ...rest }) => {
  const transformValue = _.isArray(value) ? value?.[0] : value ?? undefined

  const handlerChange = (val: any, opt: any) => {
    if (val) {
      onChange?.(_.isArray(val) ? val : [val], opt)
    } else {
      onChange?.([], [])
    }
  }

  return <AntSelect {...rest} value={transformValue} onChange={handlerChange} />
}

export default Select
