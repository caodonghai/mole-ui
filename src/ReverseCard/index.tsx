import React, { type FC } from 'react';
import cls from 'classnames';
import { IReverseCardProps } from './interface';
import { usePrefix } from '../common';

import './index.scss';

export const ReverseCard: FC<IReverseCardProps> = ({
  height = 200,
  width = 300,
  frontContent,
  backContent,
  className,
  onClick: onPropsClick,
}) => {
  const [isFlipped, setIsFlipped] = React.useState<boolean>(false);

  const prefixCls = usePrefix('reverse-card');

  const onClick = () => {
    setIsFlipped((prev) => {
      const next = !prev;
      if (typeof onPropsClick === 'function') {
        onPropsClick(next);
      }
      return next;
    });
  };

  return (
    <div className={cls(prefixCls, className)} style={{ height, width }}>
      <div className={cls('card', { flipped: isFlipped })} onClick={onClick}>
        <div className={cls('card-face', 'card-front')}>
          {frontContent}
        </div>
        <div className={cls('card-face', 'card-back')}>
          {backContent}
        </div>
      </div>
    </div>
  );
};

export * from './interface'

export default ReverseCard;
