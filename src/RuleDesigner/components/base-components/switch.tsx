import React from 'react'
import { Select as AntSelect } from 'antd'
import { SelectProps } from 'antd/es/select'
import _ from 'lodash-es'

interface ISwitchProps extends Omit<SelectProps, 'value' | 'onChange'> {
  value?: [boolean] | []
  onChange?: (v?: [boolean] | []) => void
}

export const Switch: React.FC<ISwitchProps> = ({ value, onChange, ...rest }) => {
  const transformValue = _.isArray(value) ? value?.[0] : false

  const handlerChange = (val: any, opt: any) => {
    onChange?.(_.isBoolean(val) ? [val] : [false])
  }

  return (
    <AntSelect
      style={{ width: 200 }}
      {...rest}
      value={transformValue}
      mode={undefined}
      onChange={handlerChange}
      options={
        [
          {
            label: '开启',
            value: true,
          },
          {
            label: '关闭',
            value: false,
          },
        ] as any
      }
    />
  )
}

export default Switch
