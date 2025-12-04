import React, { useRef, useState } from 'react';
import { DragItemData } from '../interface';
import { dragStore } from '../dragStore';

import './index.scss';


interface PreviewItemProps {
  /** 元素放置信息 */
  data: DragItemData;
  /** 拖拽分组标识 */
  groupName?: string;
  onClose?: () => void;
  onResizeStart?: () => void;
  onResizeing?: (size: { width: number; height: number }) => void;
  onResizeEnd?: () => void;
  moving?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const PreviewItem: React.FC<PreviewItemProps> = ({
  data,
  groupName = 'DrapDrop',
  onClose,
  onResizeStart,
  onResizeing,
  onResizeEnd,
  style,
  moving = false,
  children,
}) => {
  const [moveing, setMoveing] = useState(false);
  const [resizeing, setResizeing] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const previewStyle = {
    gridArea: `${data.y + 1} / ${data.x + 1} / ${data.y + data.row + 1} / ${
      data.x + data.column + 1
    }`,
    ...(moveing
      ? {
          opacity: 0,
          // 将当前元素移出容器外,将元素占位空置出来
          transform: `translate(-999999999px, -9999999999px)`,
        }
      : {}),
    ...(resizeing ? { opacity: 0.5 } : {}),
  };

  const onDragStart = (e: React.DragEvent) => {
    const newData = { ...data };
    newData.offsetX = e.nativeEvent.offsetX;
    newData.offsetY = e.nativeEvent.offsetY;
    dragStore.set(groupName, newData);
    // 拖拽开始立刻设置 opacity: 0 会导致拖拽默认样式也会为 opacity: 0 , 需要延迟设置
    setTimeout(() => setMoveing(true));
  };

  const onDragEnd = () => {
    setMoveing(false);
    dragStore.remove(groupName);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    dragStore.set(groupName, data);
    if (onResizeStart) onResizeStart();
    setResizeing(true);

    const handleMouseMove = (event: MouseEvent) => {
      if (onResizeing && itemRef.current) {
        onResizeing({
          width: itemRef.current.offsetWidth,
          height: itemRef.current.offsetHeight,
        });
      }
    };

    const handleMouseUp = () => {
      setResizeing(false);
      if (onResizeEnd) onResizeEnd();
      if (itemRef.current) {
        itemRef.current.style.width = '100%';
        itemRef.current.style.height = '100%';
      }
      dragStore.remove(groupName);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      ref={itemRef}
      className="preview-item"
      style={{...style, ...previewStyle}}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onMouseDown={onMouseDown}
    >
      {children || <div className="preview-item__default"></div>}
      <div
        className="close-btn"
        onClick={(e) => {
          e.stopPropagation();
          if (onClose) onClose();
        }}
      ></div>
    </div>
  );
};

export default PreviewItem;
