import React, { useMemo, type FC } from 'react';
import { IHighLightProps } from './interface';

export const HighLight: FC<IHighLightProps> = (props) => {
  const { text, highLightContext } = props;

  const htmlStr = useMemo(() => {
    let htmlStr: string = text;
    const highLightContexts = Array.isArray(highLightContext) ? highLightContext : [highLightContext];
    highLightContexts.forEach((context) => {
      const regex = new RegExp(context.highLightText, "g");
      if (typeof context.handler === 'function' && context.handler) {
        htmlStr = htmlStr.replace(
          regex,
          (substring: string, ...args: any[]) => {
            return context.handler!(substring, ...args);
          },
        );
      } else {
        htmlStr = htmlStr.replace(
          regex,
          `<span style="color: ${context.color}">${context.highLightText}</span>`,
        );
      }
    });
    return htmlStr;
  }, [text, highLightContext]);

  return <span dangerouslySetInnerHTML={{ __html: htmlStr }} />;
};

export default HighLight;
