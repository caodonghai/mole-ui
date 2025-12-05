import React from 'react'
import { InputNumber as AntInputNumber } from 'antd'
import { InputNumberProps } from 'antd/es/input-number'
import _ from 'lodash-es'

interface IInputNumberProps extends Omit<InputNumberProps, 'value' | 'onChange'> {
  value?: [number | string] | []
  onChange?: (v?: [number | string] | []) => void
}

export const InputNumber: React.FC<IInputNumberProps> = ({ value, onChange, ...rest }) => {
  const transformValue = _.isArray(value) ? value?.[0] : value ?? undefined

  const handlerChange = (val: number | string | null) => {
    onChange?.(!_.isNil(val) ? [val] : [])
  }

  return <AntInputNumber {...rest} value={transformValue} onChange={handlerChange} />
}

export default InputNumber
