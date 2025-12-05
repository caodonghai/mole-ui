import { OPERATOR_MODE_ENUM } from '../enum'

export * from './conditions'
export * from './data-types'
export * from './components'

export const OPERATOR_MODE_MAP = {
  [OPERATOR_MODE_ENUM.and]: '且',
  [OPERATOR_MODE_ENUM.or]: '或',
}

export const operationModeOption = [
  {
    label: OPERATOR_MODE_MAP[OPERATOR_MODE_ENUM.and],
    value: [OPERATOR_MODE_ENUM.and],
  },
  {
    label: OPERATOR_MODE_MAP[OPERATOR_MODE_ENUM.or],
    value: [OPERATOR_MODE_ENUM.or],
  },
]
