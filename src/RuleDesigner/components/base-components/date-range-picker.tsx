import React from 'react'
import { DatePicker as AntdDatePicker, DatePickerProps } from 'antd';
import dayjs from 'dayjs'

interface IDateRangePickerProps
  extends Omit<DatePickerProps, 'value' | 'onChange'> {
  value?: string[];
  onChange?: (v?: string[]) => void;
  formater?: string;
}

export const DateRangePicker: React.FC<IDateRangePickerProps> = ({
  formater = 'YYYY-MM-DDTHH:mm:ssZ',
  onChange,
  ...rest
}) => {
  const handlerChange = (v: [string, string]) => {
    onChange?.(v ? v?.map((i) => dayjs(i).format(formater)) : undefined)
  }

  // @ts-ignore
  return <AntdDatePicker.RangePicker {...rest} onChange={handlerChange} />;
}

export default DateRangePicker
