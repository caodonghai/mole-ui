export enum OPERATOR_MODE_ENUM {
  and = 'and',
  or = 'or',
}

export enum RULE_ITEM_TYPE_ENUM {
  CONDITION = 'CONDITION',
  REGULAR = 'REGULAR',
}

/**
 * 数据过滤操作条件枚举
 */
export enum CONDITION_ENUM {
  // 数据过滤操作条件 - 等于
  EQ = 'eq',
  // 数据过滤操作条件 - 不等于
  NE = 'ne',
  // 数据过滤操作条件 - 包含
  LIKE = 'like',
  // 数据过滤操作条件 - 不包含
  UNLIKE = 'unlike',
  // 数据过滤操作条件 - 等于任意一个
  IN = 'in',
  // 数据过滤操作条件 - 不等于任意一个
  NOT_IN = 'not_in',
  // 数据过滤操作条件 - 集合<枚举>型 包含任意一个
  SET_ENUM_IN = 'in',
  // 数据过滤操作条件 - 集合<枚举>型 不包含任意一个
  SET_ENUM_NOT_IN = 'not_in',
  // 数据过滤操作条件 - 为空
  IS_NULL = 'is_null',
  // 数据过滤操作条件 - 不为空
  NOT_NULL = 'not_null',
  // 数据过滤操作条件 - 范围
  BETWEEN = 'in_range',
  // 数据过滤操作条件 - 大于等于
  GE = 'ge',
  // 数据过滤操作条件 - 小于等于
  LE = 'le',
  // 数据过滤操作条件 - 大于
  GT = 'gt',
  // 数据过滤操作条件 - 小于
  LT = 'lt',
}
/**
 * 数据过滤操作条件枚举
 */
export enum CONDITION_DISPLAYNAME_ENUM {
  // 数据过滤操作条件 - 等于
  EQ = '等于',
  // 数据过滤操作条件 - 不等于
  NE = '不等于',
  // 数据过滤操作条件 - 包含
  LIKE = '包含',
  // 数据过滤操作条件 - 不包含
  UNLIKE = '不包含',
  // 数据过滤操作条件 - 等于任意一个
  IN = '等于任意一个',
  // 数据过滤操作条件 - 不等于任意一个
  NOT_IN = '不等于任意一个',
  // 数据过滤操作条件 - 集合<枚举>型 包含任意一个
  SET_ENUM_IN = '包含任意一个',
  // 数据过滤操作条件 - 集合<枚举>型 不包含任意一个
  SET_ENUM_NOT_IN = '不包含任意一个',
  // 数据过滤操作条件 - 为空
  IS_NULL = '为空',
  // 数据过滤操作条件 - 不为空
  NOT_NULL = '不为空',
  // 数据过滤操作条件 - 范围
  BETWEEN = '范围',
  // 数据过滤操作条件 - 大于等于
  GE = '大于等于',
  // 数据过滤操作条件 - 小于等于
  LE = '小于等于',
  // 数据过滤操作条件 - 大于
  GT = '大于',
  // 数据过滤操作条件 - 小于
  LT = '小于',
}

/**
 * 数据类型枚举
 */
export enum DATA_TYPE_ENUM {
  // 数据类型 - 字符型（string）
  STRING = 'string',
  // 数据类型 - 数值型（number）
  NUMBER = 'number',
  DOUBLE = 'double',
  INT = 'int',
  LONG = 'long',
  FLOAT = 'float',
  DECIMAL = 'decimal',

  // 数据类型 - 布尔类型 (boolean)
  BOOLEAN = 'boolean',

  // 数据类型 - 日期时间型（datetime）
  DATETIME = 'datetime',

  // 数据类型 - 枚举型（enum）
  OPTION = 'option',
  // 数据类型 - 集合<枚举>型（set<enum>）
  // 涉及控件：Checkbox、Filter、SelectMultiple
  SET_OPTION = 'set<option>',
  // 数据类型 - 创建时间 修改时间（systime）
  SYSTIME = 'systime',
  // 数据类型 - 系统编码型（syscode）
  SYSCODE = 'syscode',
  // 数据类型 - 集合<系统编码>型（set<syscode>）
  SET_SYSCODE = 'set<syscode>',
  // 数据类型 - 部门选择类型（sysdept）
  SYSDEPT = 'sysdept',
  // 数据类型 - 人员选择类型（sysstaff）
  SYSSTAFF = 'sysstaff',
  // 数据类型 - 公司选择类型（syscompany）
  SYSCOMPANY = 'syscompany',
  // 数据类型 - 用户选择（sysuser）(创建人，修改人)
  SYSUSER = 'sysuser',

  // 数据类型 - 子表单类型（subform）
  SUBFORM = 'subform',
  // 数据类型 - 关联数据类型（linkdata）
  LINKDATA = 'linkdata',
  // 数据类型 - 流水号类型（counter）
  COUNTER = 'counter',
  // 数据类型 - 集合<文件>型（set<file>）
  SET_FILE = 'set<file>',
  // 数据类型 - 集合<图片>型（set<image>）
  SET_IMAGE = 'set<image>',
  // 数据类型 - 关联选择类型（linkselect）
  LINKSELECT = 'linkselect',
  // 数据类型 - 子对象类型（submodel）
  SUBMODEL = 'submodel',
  // 数据类型 - 关联数据类型（linkmodel）
  LINKMODEL = 'linkmodel',
  // 数据类型 - 引用 (linkfield)
  LINKFIELD = 'linkfield',
  // 数据类型 - 模型对象（model）
  MODEL = 'model',
  SET_MODEL = 'modelSet',

  // 数据类型 - 富文本（richtext）
  RICH_TEXT = 'richtext',
  // 数据类型 - 日期时间范围（range<datetime>）
  RANGE_DATETIME = 'range<datetime>',
  // 数据类型 - 整数数值范围（range<long>）
  RANGE_LONG = 'range<long>',
  // 数据类型 - 小数数值范围（range<double>）
  RANGE_DOUBLE = 'range<double>',
}
