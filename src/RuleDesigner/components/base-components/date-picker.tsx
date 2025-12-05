import React from 'react'
import { DatePicker as AntdDatePicker, DatePickerProps } from 'antd'
import dayjs from 'dayjs'

interface IDatePickerProps extends Omit<DatePickerProps, 'value' | 'onChange'> {
  value?: string
  onChange?: (dateStrings?: string) => void
}

export const DatePicker: React.FC<IDatePickerProps> = ({
  value = [],
  onChange,
  formater = 'YYYY-MM-DDTHH:mm:ssZ',
  ...rest
}: any) => {
  const handlerChange = (v: any) => {
    onChange?.(v ? [dayjs(v).format(formater)] : undefined)
  }

  return (
    <AntdDatePicker {...rest} value={value?.[0]} onChange={handlerChange} />
  );
}

export default DatePicker
