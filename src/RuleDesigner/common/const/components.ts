import { Input, InputNumber, Switch, Select, DatePicker, DateRangePicker,  } from '../../components/base-components'
import { DATA_TYPE_ENUM, CONDITION_ENUM } from '../enum'
import { IComponentsMap } from '../interface'

const NumberRange = InputNumber;

/**
 * 内置组件对象
 * 与字段数据类型 DATA_TYPE_ENUM、操作符 CONDITION_ENUM 匹配
 */
export const COMPONENTS_MAP: IComponentsMap = {
  [DATA_TYPE_ENUM.STRING]: {
    base: {
      component: Input,
      componentProps: {
        placeholder: '请输入',
      },
    },
  },
  [DATA_TYPE_ENUM.NUMBER]: {
    [CONDITION_ENUM.BETWEEN]: {
      component: NumberRange,
      componentProps: {
        placeholder: '请输入',
      },
    },
    base: {
      component: InputNumber,
      componentProps: {
        placeholder: '请输入',
      },
    },
  },
  [DATA_TYPE_ENUM.INT]: {
    [CONDITION_ENUM.BETWEEN]: {
      component: NumberRange,
      componentProps: {
        placeholder: '请输入',
      },
    },
    base: {
      component: InputNumber,
      componentProps: {
        placeholder: '请输入',
      },
    },
  },
  [DATA_TYPE_ENUM.DOUBLE]: {
    [CONDITION_ENUM.BETWEEN]: {
      component: NumberRange,
      componentProps: {
        placeholder: '请输入',
      },
    },
    base: {
      component: InputNumber,
      componentProps: {
        placeholder: '请输入',
      },
    },
  },
  [DATA_TYPE_ENUM.RANGE_DOUBLE]: {
    base: {
      component: NumberRange,
      componentProps: {
        placeholder: '请输入',
      },
    },
  },
  [DATA_TYPE_ENUM.LONG]: {
    [CONDITION_ENUM.BETWEEN]: {
      component: NumberRange,
      componentProps: {
        placeholder: '请输入',
      },
    },
    base: {
      component: InputNumber,
      componentProps: {
        placeholder: '请输入',
      },
    },
  },
  [DATA_TYPE_ENUM.RANGE_LONG]: {
    base: {
      component: NumberRange,
      componentProps: {
        placeholder: '请输入',
      },
    },
  },
  [DATA_TYPE_ENUM.DECIMAL]: {
    [CONDITION_ENUM.BETWEEN]: {
      component: NumberRange,
      componentProps: {
        placeholder: '请输入',
      },
    },
    base: {
      component: InputNumber,
      componentProps: {
        placeholder: '请输入',
      },
    },
  },
  [DATA_TYPE_ENUM.DATETIME]: {
    [CONDITION_ENUM.BETWEEN]: {
      component: DateRangePicker,
      componentProps: {
        placeholder: ['请选择', '请选择'],
        format: 'YYYY-MM-DDTHH:mm:ssZ',
        showTime: true,
      },
    },
    base: {
      component: DatePicker,
      componentProps: {
        placeholder: '请选择',
        format: 'YYYY-MM-DDTHH:mm:ssZ',
        showTime: true,
      },
    },
  },
  [DATA_TYPE_ENUM.RANGE_DATETIME]: {
    base: {
      component: DateRangePicker,
      componentProps: {
        placeholder: ['请选择', '请选择'],
        format: 'YYYY-MM-DDTHH:mm:ssZ',
        showTime: true,
      },
    },
  },
  [DATA_TYPE_ENUM.BOOLEAN]: {
    base: {
      component: Switch,
      componentProps: {},
    },
  },
  [DATA_TYPE_ENUM.OPTION]: {
    base: {
      component: Select,
      componentProps: {
        placeholder: '请选择',
      },
    },
  },
  [DATA_TYPE_ENUM.SET_OPTION]: {
    base: {
      component: Select,
      componentProps: {
        multiple: true,
        placeholder: '请选择',
      },
    },
  },
  [DATA_TYPE_ENUM.SYSTIME]: {
    [CONDITION_ENUM.BETWEEN]: {
      component: DateRangePicker,
      componentProps: {
        placeholder: ['请选择', '请选择'],
        format: 'YYYY-MM-DDTHH:mm:ssZ',
        showTime: true,
      },
    },
    base: {
      component: DatePicker,
      componentProps: {
        placeholder: '请选择',
        format: 'YYYY-MM-DDTHH:mm:ssZ',
        showTime: true,
      },
    },
  },
  [DATA_TYPE_ENUM.LINKSELECT]: {
    base: {
      component: InputNumber,
      componentProps: {
        placeholder: '请输入',
      },
    },
  },
  [DATA_TYPE_ENUM.RICH_TEXT]: {
    base: {
      component: Input,
      componentProps: {
        placeholder: '请输入',
      },
    },
  },
}
