# BoardDesigner

拖拽布局组件

## 设计模式

```tsx
import { useState, useRef } from 'react';
import { BoardDesigner, DropContentRef } from 'mole-ui';
import dragList from './schema';

export default () => {
  const [data, setData] = useState<DragItemData[]>([
    {
      id: 1111,
      key: '124',
      title: '组件标题',
      column: 1,
      row: 1,
      x: 1,
      y: 1,
    },
    {
      id: 2222,
      key: '123',
      title: '组件标题',
      column: 1,
      row: 1,
      x: 2,
      y: 3,
    },
  ]);
  const [column, setColumn] = useState(6);
  const [row, setRow] = useState(6);

  const dropContentRef = useRef<DropContentRef>(null);

  const renderItem = (item: DragItemData) => {
    return (
      <div
        style={{
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '26px',
          fontWeight: '600',
          height: '100%',
          backgroundColor: '#707eb1',
          borderRadius: '6px',
        }}
      >
        {item.column}x{item.row}
      </div>
    );
  };

  return (
    <>
      <div
        style={{ width: '100%', height: '800px', backgroundColor: '#032bfb1a' }}
      >
        <BoardDesigner
          designable
          data={data}
          dragList={dragList}
          onUpdateModelValue={setData}
          ref={dropContentRef}
          groupName="drag-demo"
          row={row}
          column={column}
          gap={6}
          renderItem={renderItem}
        />
      </div>
      <div>
        <button type="button" onClick={() => dropContentRef.current?.addRow()}>
          添加行
        </button>
        <button
          type="button"
          onClick={() => dropContentRef.current?.deleteRow()}
        >
          删除行
        </button>
      </div>
    </>
  );
};
```

## 展示模式

```tsx
import { useState, useRef } from 'react';
import { BoardDesigner, DropContentRef } from 'mole-ui';
import dragList from './schema';

export default () => {
  const [data, setData] = useState<DragItemData[]>([
    {
      id: 1111,
      key: '124',
      title: '组件标题',
      column: 1,
      row: 1,
      x: 1,
      y: 1,
    },
    {
      id: 2222,
      key: '123',
      title: '组件标题',
      column: 1,
      row: 1,
      x: 2,
      y: 3,
    },
  ]);
  const [column, setColumn] = useState(6);
  const [row, setRow] = useState(6);

  const dropContentRef = useRef<DropContentRef>(null);

  const renderItem = (item: DragItemData) => {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          color: '#fff',
          backgroundColor: '#707eb1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '26px',
          fontWeight: '600',
        }}
      >
        {item.column}x{item.row}
      </div>
    );
  };

  return (
    <div style={{ width: '100%', height: '800px', backgroundColor: '#f9f9f9' }}>
      <BoardDesigner
        data={data}
        dragList={dragList}
        renderItem={renderItem}
        onUpdateModelValue={setData}
        ref={dropContentRef}
        groupName="drag-demo"
        row={row}
        column={column}
        gap={6}
      />
    </div>
  );
};
```

<API id="BoardDesigner"></API>