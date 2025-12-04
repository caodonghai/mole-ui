export interface DragItem {
  key: string;
  title: string;
  column: number;
  row: number;
}

export interface DragItemData extends DragItem {
  id: number;
  x: number;
  y: number;
  offsetX?: number;
  offsetY?: number;
}

export interface DragSchema {
  title: string;
  list: DragItem[];
}


export interface IBoardDesigner {
  /** 数据源 */
  data: DragItemData[];
  dragList: DragSchema[];
  /** 更新数据 */
  onUpdateModelValue: (value: DragItemData[]) => void;
  /** 渲染组件 */
  renderItem: (item: DragItemData, designable?: boolean) => React.ReactNode;
  /**
   * 是否可设计模式
   * @default false
   */
  designable?: boolean;
  /** 拖拽分组标识 */
  groupName?: string;
  /** 容器需要分隔列数 */
  column?: number;
  /** 容器需要分隔行数 */
  row?: number;
  /** 容器格子间隔 */
  gap?: number;
  /** 是否显示拖拽预占位层 */
  mask?: boolean;
  /** 放置前的钩子 如果返回 false 则取消放置 */
  beforeDrop?: (
    e: DragItemData,
    list: DragItemData[],
  ) => Promise<boolean> | boolean;
  /** 删除前的钩子 如果返回 false 则取消删除 */
  beforeRemove?: (
    e: DragItemData,
    list: DragItemData[],
  ) => Promise<boolean> | boolean;
}