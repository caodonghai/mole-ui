import { CONDITION_ENUM, CONDITION_DISPLAYNAME_ENUM, DATA_TYPE_ENUM } from '../enum'

// 不同数据类型的过滤条件集合
export const CONDITIONS_MAP: { [index: string]: Array<{ value: string; label: string }> } = {
  // 字符型（string）
  [DATA_TYPE_ENUM.STRING]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.LIKE,
      label: CONDITION_DISPLAYNAME_ENUM.LIKE,
    },
    {
      value: CONDITION_ENUM.UNLIKE,
      label: CONDITION_DISPLAYNAME_ENUM.UNLIKE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 数字
  [DATA_TYPE_ENUM.NUMBER]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.GE,
      label: CONDITION_DISPLAYNAME_ENUM.GE,
    },
    {
      value: CONDITION_ENUM.LE,
      label: CONDITION_DISPLAYNAME_ENUM.LE,
    },
    {
      value: CONDITION_ENUM.BETWEEN,
      label: CONDITION_DISPLAYNAME_ENUM.BETWEEN,
    },
    {
      value: CONDITION_ENUM.GT,
      label: CONDITION_DISPLAYNAME_ENUM.GT,
    },
    {
      value: CONDITION_ENUM.LT,
      label: CONDITION_DISPLAYNAME_ENUM.LT,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 整型（long）
  [DATA_TYPE_ENUM.LONG]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.GE,
      label: CONDITION_DISPLAYNAME_ENUM.GE,
    },
    {
      value: CONDITION_ENUM.LE,
      label: CONDITION_DISPLAYNAME_ENUM.LE,
    },
    {
      value: CONDITION_ENUM.BETWEEN,
      label: CONDITION_DISPLAYNAME_ENUM.BETWEEN,
    },
    {
      value: CONDITION_ENUM.GT,
      label: CONDITION_DISPLAYNAME_ENUM.GT,
    },
    {
      value: CONDITION_ENUM.LT,
      label: CONDITION_DISPLAYNAME_ENUM.LT,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 整数范围型（range<long>）
  [DATA_TYPE_ENUM.RANGE_LONG]: [
    {
      value: CONDITION_ENUM.LIKE,
      label: CONDITION_DISPLAYNAME_ENUM.LIKE,
    },
    {
      value: CONDITION_ENUM.UNLIKE,
      label: CONDITION_DISPLAYNAME_ENUM.UNLIKE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 浮点型（double）
  [DATA_TYPE_ENUM.DOUBLE]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.GE,
      label: CONDITION_DISPLAYNAME_ENUM.GE,
    },
    {
      value: CONDITION_ENUM.LE,
      label: CONDITION_DISPLAYNAME_ENUM.LE,
    },
    {
      value: CONDITION_ENUM.BETWEEN,
      label: CONDITION_DISPLAYNAME_ENUM.BETWEEN,
    },
    {
      value: CONDITION_ENUM.GT,
      label: CONDITION_DISPLAYNAME_ENUM.GT,
    },
    {
      value: CONDITION_ENUM.LT,
      label: CONDITION_DISPLAYNAME_ENUM.LT,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 浮点范围型（range<double>）
  [DATA_TYPE_ENUM.RANGE_DOUBLE]: [
    {
      value: CONDITION_ENUM.LIKE,
      label: CONDITION_DISPLAYNAME_ENUM.LIKE,
    },
    {
      value: CONDITION_ENUM.UNLIKE,
      label: CONDITION_DISPLAYNAME_ENUM.UNLIKE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 枚举型（enum）
  [DATA_TYPE_ENUM.OPTION]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.IN,
      label: CONDITION_DISPLAYNAME_ENUM.IN,
    },
    {
      value: CONDITION_ENUM.NOT_IN,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_IN,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 集合<枚举>型（set<enum>）
  [DATA_TYPE_ENUM.SET_OPTION]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.SET_ENUM_IN,
      label: CONDITION_DISPLAYNAME_ENUM.SET_ENUM_IN,
    },
    {
      value: CONDITION_ENUM.SET_ENUM_NOT_IN,
      label: CONDITION_DISPLAYNAME_ENUM.SET_ENUM_NOT_IN,
    },
    {
      value: CONDITION_ENUM.LIKE,
      label: CONDITION_DISPLAYNAME_ENUM.LIKE,
    },
    {
      value: CONDITION_ENUM.UNLIKE,
      label: CONDITION_DISPLAYNAME_ENUM.UNLIKE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 日期时间型（datetime）
  [DATA_TYPE_ENUM.DATETIME]: [
    {
      value: CONDITION_ENUM.BETWEEN,
      label: CONDITION_DISPLAYNAME_ENUM.BETWEEN,
    },
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.GE,
      label: CONDITION_DISPLAYNAME_ENUM.GE,
    },
    {
      value: CONDITION_ENUM.LE,
      label: CONDITION_DISPLAYNAME_ENUM.LE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 日期时间范围型（range<datetime>）
  [DATA_TYPE_ENUM.RANGE_DATETIME]: [
    {
      value: CONDITION_ENUM.LIKE,
      label: CONDITION_DISPLAYNAME_ENUM.LIKE,
    },
    {
      value: CONDITION_ENUM.UNLIKE,
      label: CONDITION_DISPLAYNAME_ENUM.UNLIKE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 系统编码型（syscode）
  [DATA_TYPE_ENUM.SYSCODE]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 系统编码型（set_syscode）
  [DATA_TYPE_ENUM.SET_SYSCODE]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.SET_ENUM_IN,
      label: CONDITION_DISPLAYNAME_ENUM.SET_ENUM_IN,
    },
    {
      value: CONDITION_ENUM.SET_ENUM_NOT_IN,
      label: CONDITION_DISPLAYNAME_ENUM.SET_ENUM_NOT_IN,
    },
    {
      value: CONDITION_ENUM.LIKE,
      label: CONDITION_DISPLAYNAME_ENUM.LIKE,
    },
    {
      value: CONDITION_ENUM.UNLIKE,
      label: CONDITION_DISPLAYNAME_ENUM.UNLIKE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 流水号类型（counter）
  [DATA_TYPE_ENUM.COUNTER]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.LIKE,
      label: CONDITION_DISPLAYNAME_ENUM.LIKE,
    },
    {
      value: CONDITION_ENUM.UNLIKE,
      label: CONDITION_DISPLAYNAME_ENUM.UNLIKE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 用户类型（sysdept）(创建人 修改人)
  [DATA_TYPE_ENUM.SYSUSER]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.IN,
      label: CONDITION_DISPLAYNAME_ENUM.IN,
    },
    {
      value: CONDITION_ENUM.NOT_IN,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_IN,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 日期时间型（datetime）
  [DATA_TYPE_ENUM.SYSTIME]: [
    {
      value: CONDITION_ENUM.BETWEEN,
      label: CONDITION_DISPLAYNAME_ENUM.BETWEEN,
    },
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.GE,
      label: CONDITION_DISPLAYNAME_ENUM.GE,
    },
    {
      value: CONDITION_ENUM.LE,
      label: CONDITION_DISPLAYNAME_ENUM.LE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 人员选择类型（sysstaff）
  [DATA_TYPE_ENUM.SYSSTAFF]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.SET_ENUM_IN,
      label: CONDITION_DISPLAYNAME_ENUM.SET_ENUM_IN,
    },
    {
      value: CONDITION_ENUM.SET_ENUM_NOT_IN,
      label: CONDITION_DISPLAYNAME_ENUM.SET_ENUM_NOT_IN,
    },
    {
      value: CONDITION_ENUM.LIKE,
      label: CONDITION_DISPLAYNAME_ENUM.LIKE,
    },
    {
      value: CONDITION_ENUM.UNLIKE,
      label: CONDITION_DISPLAYNAME_ENUM.UNLIKE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 部门选择类型（sysdept）
  [DATA_TYPE_ENUM.SYSDEPT]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.SET_ENUM_IN,
      label: CONDITION_DISPLAYNAME_ENUM.SET_ENUM_IN,
    },
    {
      value: CONDITION_ENUM.SET_ENUM_NOT_IN,
      label: CONDITION_DISPLAYNAME_ENUM.SET_ENUM_NOT_IN,
    },
    {
      value: CONDITION_ENUM.LIKE,
      label: CONDITION_DISPLAYNAME_ENUM.LIKE,
    },
    {
      value: CONDITION_ENUM.UNLIKE,
      label: CONDITION_DISPLAYNAME_ENUM.UNLIKE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 公司选择类型（syscompany）
  [DATA_TYPE_ENUM.SYSCOMPANY]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.SET_ENUM_IN,
      label: CONDITION_DISPLAYNAME_ENUM.SET_ENUM_IN,
    },
    {
      value: CONDITION_ENUM.SET_ENUM_NOT_IN,
      label: CONDITION_DISPLAYNAME_ENUM.SET_ENUM_NOT_IN,
    },
    {
      value: CONDITION_ENUM.LIKE,
      label: CONDITION_DISPLAYNAME_ENUM.LIKE,
    },
    {
      value: CONDITION_ENUM.UNLIKE,
      label: CONDITION_DISPLAYNAME_ENUM.UNLIKE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 关联选择类型（linkselect）
  [DATA_TYPE_ENUM.LINKSELECT]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 布尔类型（boolean）
  [DATA_TYPE_ENUM.BOOLEAN]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
  ],
  // 关联字段类型（linkmodel）
  [DATA_TYPE_ENUM.LINKFIELD]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.LIKE,
      label: CONDITION_DISPLAYNAME_ENUM.LIKE,
    },
    {
      value: CONDITION_ENUM.UNLIKE,
      label: CONDITION_DISPLAYNAME_ENUM.UNLIKE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 关联模型类型（linkmodel）
  [DATA_TYPE_ENUM.LINKMODEL]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 模型对象（model）
  [DATA_TYPE_ENUM.MODEL]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 模型对象集合（modelSet）
  [DATA_TYPE_ENUM.SET_MODEL]: [
    {
      value: CONDITION_ENUM.EQ,
      label: CONDITION_DISPLAYNAME_ENUM.EQ,
    },
    {
      value: CONDITION_ENUM.NE,
      label: CONDITION_DISPLAYNAME_ENUM.NE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
  // 富文本（richtext）
  [DATA_TYPE_ENUM.RICH_TEXT]: [
    {
      value: CONDITION_ENUM.LIKE,
      label: CONDITION_DISPLAYNAME_ENUM.LIKE,
    },
    {
      value: CONDITION_ENUM.UNLIKE,
      label: CONDITION_DISPLAYNAME_ENUM.UNLIKE,
    },
    {
      value: CONDITION_ENUM.IS_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.IS_NULL,
    },
    {
      value: CONDITION_ENUM.NOT_NULL,
      label: CONDITION_DISPLAYNAME_ENUM.NOT_NULL,
    },
  ],
}
