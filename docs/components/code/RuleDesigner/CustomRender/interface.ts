import { TreeSelectProps } from 'antd/es/tree-select';
import { FormItemProps } from 'antd/es/form';

export interface IValueSwitchGroup {
  /**
   * 数据类型名称
   */
  label: string;
  /**
   * 数据类型识别码/ID
   */
  value: string;
  /**
   * 数据类型对应的数据集合
   */
  treeData?: TreeSelectProps['treeData'];
}

export type IBaseNames = (string | number)[];


export interface IFieldOption extends FormItemProps {
  fieldKey?: number | undefined;
  key: number;
}