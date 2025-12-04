import React from 'react';
import { dragStore } from '../dragStore';
import { DragItemData } from '../interface';

import './index.scss';

interface DragItemProps {
  data: DragItemData;
  /** 拖拽分组标识 */
  groupName?: string;
  onClick?: (e: React.MouseEvent, data: DragItemData) => void;
}

const DragItem: React.FC<React.PropsWithChildren<DragItemProps>> = ({
  data,
  groupName = 'DrapDrop',
  onClick,
  children,
}) => {
  const onDragStart = () => {
    dragStore.set(groupName, { ...data });
  };

  const onDragEnd = () => {
    dragStore.remove(groupName);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e, data);
    }
  };

  return (
    <div className="drag-item">
      <div
        className="drag-item__el"
        draggable={true}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onClick={handleClick}
      >
        {children}
      </div>
      <div className="drag-item__title">{data.title}</div>
    </div>
  );
};

export default DragItem;