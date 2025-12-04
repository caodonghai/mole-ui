import React from 'react';
import { getItemSizeStyle } from '../dragStore';

import './index.scss';

interface MoveMaskProps {
  /** 容器格子宽 */
  width: number;
  /** 容器格子高 */
  height: number;
  /** 格子间隔 */
  gap: number;
  /** 拖拽元素列数 */
  column: number;
  /** 拖拽元素行数 */
  row: number;
  /** 拖拽元素 x 坐标 */
  x: number;
  /** 拖拽元素 y 坐标 */
  y: number;
  /** 是否可以放置 */
  isPutDown: boolean;
  children?: React.ReactNode;
}

const MoveMask: React.FC<MoveMaskProps> = ({
  width,
  height,
  gap,
  column,
  row,
  x,
  y,
  isPutDown,
  children,
}) => {
  const maskStyle = getItemSizeStyle(width, height, x, y, gap, column, row);

  return (
    <div className="move-mask" style={maskStyle}>
      {children || (
        <div
          className="move-mask__default"
          style={{
            backgroundColor: isPutDown ? '#2867f91c' : '#ff00001c',
            borderColor: isPutDown ? '#2c68f3' : '#ff000079',
          }}
        ></div>
      )}
    </div>
  );
};

export default MoveMask;
