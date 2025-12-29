export interface IReverseCardProps {
  /**
   * 卡片宽度
   * @default '300px'
   */
  width?: string | number;
  /**
   * 卡片高度
   * @default '200px'
   */
  height?: string | number;
  style?: React.CSSProperties;
  className?: string;
  /** 卡片正面内容 */
  frontContent: React.ReactNode;
  /** 卡片背面内容 */
  backContent: React.ReactNode;
  /**
   * 点击事件
   * @param isFlipped 卡片是否翻转
   */
  onClick?: (isFlipped: boolean) => void;
}
