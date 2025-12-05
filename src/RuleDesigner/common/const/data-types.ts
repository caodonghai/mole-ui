import { DATA_TYPE_ENUM } from '../enum'

// 字段数据类型集合
export const DATATYPES_MAP: Array<{ value: string; label: string }> = [
  {
    value: DATA_TYPE_ENUM.STRING,
    label: '文本',
  },
  {
    value: DATA_TYPE_ENUM.NUMBER,
    label: '整数',
  },
  {
    value: DATA_TYPE_ENUM.LONG,
    label: '整数',
  },
  {
    value: DATA_TYPE_ENUM.RANGE_LONG,
    label: '整数范围',
  },
  {
    value: DATA_TYPE_ENUM.DOUBLE,
    label: '浮点数',
  },
  {
    value: DATA_TYPE_ENUM.RANGE_DOUBLE,
    label: '浮点数范围',
  },
  {
    value: DATA_TYPE_ENUM.SYSCODE,
    label: '单选',
  },
  {
    value: DATA_TYPE_ENUM.SET_SYSCODE,
    label: '多选',
  },
  {
    value: DATA_TYPE_ENUM.DATETIME,
    label: '日期时间',
  },
  {
    value: DATA_TYPE_ENUM.RANGE_DATETIME,
    label: '日期时间范围',
  },
  {
    value: DATA_TYPE_ENUM.BOOLEAN,
    label: '布尔',
  },
  {
    value: DATA_TYPE_ENUM.LINKSELECT,
    label: '关联模型',
  },
  {
    value: DATA_TYPE_ENUM.LINKMODEL,
    label: '关联模型',
  },
  {
    value: DATA_TYPE_ENUM.LINKFIELD,
    label: '引用字段',
  },
  {
    value: DATA_TYPE_ENUM.SUBMODEL,
    label: '子对象',
  },
  {
    value: DATA_TYPE_ENUM.SUBFORM,
    label: '子对象',
  },
  {
    value: DATA_TYPE_ENUM.SET_IMAGE,
    label: '图片',
  },
  {
    value: DATA_TYPE_ENUM.SET_FILE,
    label: '附件',
  },
  {
    value: DATA_TYPE_ENUM.COUNTER,
    label: '流水号',
  },
  {
    value: DATA_TYPE_ENUM.SYSDEPT,
    label: '组织',
  },
  {
    value: DATA_TYPE_ENUM.SYSSTAFF,
    label: '人员',
  },
  {
    value: DATA_TYPE_ENUM.MODEL,
    label: '数据模型',
  },
  {
    value: DATA_TYPE_ENUM.SET_MODEL,
    label: '数据模型集合',
  },
  {
    value: DATA_TYPE_ENUM.RICH_TEXT,
    label: '富文本',
  },
]
