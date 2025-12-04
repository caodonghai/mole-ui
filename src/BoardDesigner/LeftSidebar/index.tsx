import React from 'react';
import DragItem from '../DragItem';
import { DragSchema } from '../interface';

import './index.scss'

interface LeftSidebarProps {
  list: DragSchema[];
  /** 拖拽分组标识 */
  groupName?: string;
  onDragItemClick?: (e: React.MouseEvent, item: any) => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  list,
  groupName = 'DrapDrop',
  onDragItemClick,
}) => {
  return (
    <div className="drag-sidebar">
      {list.map((item, index) => (
        <div className="drag-group" key={index}>
          <div className="drag-group__title">{item.title}</div>
          <div className="drag-group__content">
            {item.list.map((it) => (
              <div className="drag-group-item" key={it.key}>
                <DragItem
                  data={it}
                  groupName={groupName}
                  onClick={(e) => onDragItemClick && onDragItemClick(e, it)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSidebar;
