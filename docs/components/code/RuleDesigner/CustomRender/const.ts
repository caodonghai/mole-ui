import { SYSTEM_RULE_CODE_ENUM } from './enum'
import { IValueSwitchGroup } from './interface'

export const antFormItemNameSplit = '_&$&_'

export const baseComponentProps = {
  allowClear: true,
  style: {
    width: '205px',
  },
}

export const switchGroupConfigs: IValueSwitchGroup[] = [
  {
    label: '系统变量',
    value: 'system',
    treeData: [
      {
        label: '当前用户',
        value: SYSTEM_RULE_CODE_ENUM._SESSION_PERSON,
      },
      {
        label: '当前用户所在部门',
        value: SYSTEM_RULE_CODE_ENUM._SESSION_DEPARTMENT,
      },
      {
        label: '当前用户所在公司',
        value: SYSTEM_RULE_CODE_ENUM._SESSION_COMPANY,
      },
    ],
  },
]
