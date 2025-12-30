export interface IHighLightContext {
  /**
   * 需要高亮的文本
   */
  highLightText: string;
  /**
   * 高亮文本的颜色
   */
  color: string;
  /**
   * 高亮文本的处理函数
   */
  handler?: Parameters<typeof String.prototype.replace>[1];
}

export interface IHighLightProps {
  /**
   * 需要处理高亮的原始文本
   */
  text: string;
  /**
   * 高亮的文本和颜色配置
   */
  highLightContext: IHighLightContext | IHighLightContext[];
}
