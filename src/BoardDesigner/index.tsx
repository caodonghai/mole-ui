import React, { forwardRef } from 'react';
import DropContent, { DropContentRef } from './DropContent';
import { IBoardDesigner } from './interface';
import LeftSidebar from './LeftSidebar';
import PreviewLayout from './PreviewLayout';

import './index.scss';

export * from './DropContent';

export const BoardDesigner = forwardRef<DropContentRef, IBoardDesigner>(({
  data =[],
  designable = false,
  onUpdateModelValue,
  groupName,
  dragList = [],
  ...rest
}, ref) => {

  return (
    <>
      {designable ? (
        <div className="board-designer">
          <div className="board-designer_left">
            <LeftSidebar list={dragList} groupName={groupName} />
          </div>
          <div className="board-designer_right">
            <DropContent
              modelValue={data}
              onUpdateModelValue={onUpdateModelValue}
              ref={ref}
              groupName={groupName}
              {...rest}
            ></DropContent>
          </div>
        </div>
      ) : (
        <div style={{ width: '100%', height: '800px' }}>
          <PreviewLayout data={data} {...rest} />
        </div>
      )}
    </>
  );
});

export default BoardDesigner;