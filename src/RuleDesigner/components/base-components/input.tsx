import React from 'react'
import { Input as AntInput } from 'antd'
import { InputProps } from 'antd/es/input'
import _ from 'lodash-es'

interface IInputProps extends Omit<InputProps, 'value' | 'onChange'> {
  value?: [string] | []
  onChange?: (v?: [string] | []) => void
}

export const Input: React.FC<IInputProps> = ({ value, onChange, ...rest }) => {
  const transformValue = _.isArray(value) ? value?.[0] : value ?? undefined

  const handlerChange = (e: any) => {
    const nextV = e.target.value
    onChange?.(nextV ? [nextV] : [])
  }

  return <AntInput {...rest} value={transformValue} onChange={handlerChange} />
}

export default Input
