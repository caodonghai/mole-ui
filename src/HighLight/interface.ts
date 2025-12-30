export interface IHighLightContext {
  highLightText: string;
  color: string;
  handler?: Parameters<typeof String.prototype.replace>[1];
}

export interface IHighLightProps {
  text: string;
  highLightContext: IHighLightContext | IHighLightContext[];
}
