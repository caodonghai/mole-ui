import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { DragItemData } from '../interface';
import MoveMask from '../MoveMask';
import PreviewItem from '../PreviewItem';
import { booleanIntersects, booleanWithin, ceil, dragStore } from '../dragStore';

import './index.scss';

export interface DropContentProps {
  /** 数据源 */
  modelValue: DragItemData[];
  /** 更新数据 */
  onUpdateModelValue: (value: DragItemData[]) => void;
  /** 拖拽分组标识 */
  groupName?: string;
  /** 容器需要分隔列数 */
  column?: number;
  /** 容器需要分隔行数 */
  row?: number;
  /** 容器格子间隔 */
  gap?: number;
  /** 是否显示拖拽预占位层 */
  mask?: boolean;
  /** 放置前的钩子 如果返回 false 则取消放置 */
  beforeDrop?: (
    e: DragItemData,
    list: DragItemData[],
  ) => Promise<boolean> | boolean;
  /** 删除前的钩子 如果返回 false 则取消删除 */
  beforeRemove?: (
    e: DragItemData,
    list: DragItemData[],
  ) => Promise<boolean> | boolean;
}

export interface DropContentRef {
  addRow: () => void;
  deleteRow: () => void;
}

export const DropContent = forwardRef<DropContentRef, DropContentProps>(
  (
    {
      modelValue: list,
      onUpdateModelValue,
      groupName = 'DrapDrop',
      column = 0,
      row = 0,
      gap = 0,
      mask = true,
      beforeDrop = () => true,
      beforeRemove = () => true,
      renderItem
    },
    ref,
  ) => {
    const designerContentRef = useRef<HTMLDivElement>(null);
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
    const [columnCount, setColumnCount] = useState(column);
    const [rowCount, setRowCount] = useState(row);
    const [isDelRow, setIsDelRow] = useState(true);

    // 拖拽中的元素
    const [current, setCurrent] = useState({
      show: false,
      id: undefined as number | undefined,
      column: 0, // 宽
      row: 0, // 高
      x: 0, // 列
      y: 0, // 行
    });
    const currentRef = useRef(current);
    const isPutDownRef = useRef(false);

    // 计算网格行列数
    useEffect(() => {
      if (list && list.length > 0) {
        const xCoords: number[] = [];
        const yCoords: number[] = [];
        list.forEach((item) => {
          xCoords.push(item.x + item.column);
          yCoords.push(item.y + item.row);
        });
        const maxColumn = Math.max(...xCoords, column, columnCount);
        const maxRow = Math.max(...yCoords, row, rowCount);
        setColumnCount(maxColumn);
        setRowCount(maxRow);
      } else {
        setColumnCount(column);
        setRowCount(row);
      }
    }, [list, column, row, columnCount, rowCount]);

    // 计算删除行状态
    useEffect(() => {
      const rows = Math.max(row, rowCount - 1);
      const delRowStatus = list.every((item) => item.y + item.row <= rows);
      setIsDelRow(delRowStatus);
    }, [list, row, rowCount]);

    // 计算格子尺寸
    useEffect(() => {
      const updateBoxSize = () => {
        if (designerContentRef.current) {
          const { width, height } =
            designerContentRef.current.getBoundingClientRect();
          setBoxSize({
            width: (width - (column - 1) * gap) / column,
            height: (height - (row - 1) * gap) / row,
          });
        }
      };

      updateBoxSize();
      window.addEventListener('resize', updateBoxSize);
      return () => window.removeEventListener('resize', updateBoxSize);
    }, [column, row, gap]);

    // 是否可以放置
    const isPutDown = useMemo(() => {
      const currentXy = [
        currentRef.current.x,
        currentRef.current.y,
        currentRef.current.x + currentRef.current.column,
        currentRef.current.y + currentRef.current.row,
      ];

      console.log(
        'isPutDown',
        currentXy,
        list,
        booleanWithin([0, 0, columnCount, rowCount], currentXy as any),
        list.every(
          (item) =>
            item.id === current.id ||
            !booleanIntersects(
              [item.x, item.y, item.x + item.column, item.y + item.row],
              currentXy as any,
            ),
        ),
      );
      const _isPutDown =
        booleanWithin([0, 0, columnCount, rowCount], currentXy as any) &&
        list.every(
          (item) =>
            item.id === current.id ||
            !booleanIntersects(
              [item.x, item.y, item.x + item.column, item.y + item.row],
              currentXy as any,
            ),
        );
      isPutDownRef.current = _isPutDown;
      return _isPutDown;
    }, [list, current, columnCount, rowCount]);

    // 计算 x 坐标
    const getX = (num: number) => Math.floor(num / (boxSize.width + gap));
    // 计算 y 坐标
    const getY = (num: number) => Math.floor(num / (boxSize.height + gap));
    // 计算列数
    const getColumn = (num: number) =>
      Math.max(1, ceil(num / (boxSize.width + gap)));
    // 计算行数
    const getRow = (num: number) =>
      Math.max(1, ceil(num / (boxSize.height + gap)));

    // 进入放置目标
    const onDragEnter = (e: React.DragEvent) => {
      e.preventDefault();
      const dragData = dragStore.get(groupName);
      if (dragData) {
        currentRef.current = {
          ...currentRef.current,
          column: dragData.column,
          row: dragData.row,
          x: getX(e.nativeEvent.offsetX) - getX(dragData?.offsetX ?? 0),
          y: getY(e.nativeEvent.offsetY) - getY(dragData?.offsetY ?? 0),
          id: dragData.id,
          show: true,
        };
        setCurrent(currentRef.current);
      }
    };

    // 在目标中移动
    const onDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      const dragData = dragStore.get(groupName);
      if (dragData) {
        currentRef.current = {
          ...currentRef.current,
          column: dragData.column,
          row: dragData.row,
          x: getX(e.nativeEvent.offsetX) - getX(dragData?.offsetX ?? 0),
          y: getY(e.nativeEvent.offsetY) - getY(dragData?.offsetY ?? 0),
        };
        setCurrent(currentRef.current);
      }
    };

    // 离开目标
    const onDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      currentRef.current = {
        ...currentRef.current,
        show: false,
        id: undefined,
      };
      setCurrent(currentRef.current);
    };

    // 放置在目标上
    const onDrop = async (e: React.DragEvent) => {
      e.preventDefault();
      currentRef.current = {
        ...currentRef.current,
        show: false,
      };
      setCurrent(currentRef.current);
      const dragData = dragStore.get(groupName);
      if (
        isPutDown &&
        dragData &&
        (await beforeDrop(
          {
            ...dragData,
            x: current.x,
            y: current.y,
          },
          list,
        ))
      ) {
        if (dragData.id) {
          // 更新现有元素位置
          list.forEach((item) => {
            if (item.id === dragData.id) {
              item.x = current.x;
              item.y = current.y;
            }
          });
          onUpdateModelValue([...list]);
        } else {
          // 添加新元素
          onUpdateModelValue([
            ...list,
            {
              ...dragData,
              x: current.x,
              y: current.y,
              id: new Date().getTime(),
            },
          ]);
        }
      }
    };

    // 删除元素
    const onRemovePreviewItem = (el: DragItemData) => {
      if (beforeRemove(el, list)) {
        onUpdateModelValue(list.filter((item) => item !== el));
      }
    };

    // 调整大小开始
    const onResizeStart = () => {
      const dragData = dragStore.get(groupName);
      if (dragData) {
        currentRef.current = {
          ...currentRef.current,
          column: dragData.column,
          row: dragData.row,
          x: dragData.x,
          y: dragData.y,
          id: dragData.id,
          show: true,
        };
        setCurrent(currentRef.current);
      }
    };

    // 调正大小时
    const onResizeing = (e: { width: number; height: number }) => {
      const dragData = dragStore.get(groupName);
      if (dragData) {
        currentRef.current = {
          ...currentRef.current,
          column: getColumn(e.width),
          row: getRow(e.height),
        };
        setCurrent(currentRef.current);
      }
    };

    // 调整大小结束
    const onResizeEnd = async () => {
      currentRef.current = {
        ...currentRef.current,
        show: false,
        id: undefined,
      };
      setCurrent(currentRef.current);
      const dragData = dragStore.get(groupName);
      console.log('onResizeEnd', isPutDownRef.current, {
        currentRef,
        isPutDown,
        dragData,
      });

      if (
        isPutDownRef.current &&
        dragData &&
        (await beforeDrop(
          {
            ...dragData,
            column: currentRef.current.column,
            row: currentRef.current.row,
          },
          list,
        ))
      ) {
        const newList = list.map((item) =>
          item.id === dragData.id
            ? {
                ...item,
                column: currentRef.current.column,
                row: currentRef.current.row,
              }
            : item,
        );
        onUpdateModelValue(newList);
      }
    };

    // 暴露方法给父组件
    useImperativeHandle(ref, () => ({
      // 添加行
      addRow: () => setRowCount(rowCount + 1),
      // 删除行
      deleteRow: () => isDelRow && setRowCount(Math.max(row, rowCount - 1)),
    }));

    return (
      <div ref={designerContentRef} className="drop-content">
        <div
          className="drop-content__drop-container"
          style={{
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateColumns: `repeat(${columnCount}, ${boxSize.width}px)`,
            gridTemplateRows: `repeat(${rowCount}, ${boxSize.height}px)`,
            gap: `${gap}px`,
          }}
          onDragEnter={onDragEnter}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          {Array.from({ length: rowCount }).map((_, x) =>
            Array.from({ length: columnCount }).map((_, y) => (
              <div className="bg-column" key={`${x}-${y}`}></div>
            )),
          )}
        </div>
        <div
          className="drop-content__preview"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columnCount}, ${boxSize.width}px)`,
            gridTemplateRows: `repeat(${rowCount}, ${boxSize.height}px)`,
            gap: `${gap}px`,
          }}
        >
          {list.map((item) => (
            <PreviewItem
              key={item.id}
              data={item}
              groupName={groupName}
              style={{
                pointerEvents:
                  current.show && item.id !== current.id ? 'none' : 'all',
              }}
              onClose={() => onRemovePreviewItem(item)}
              onResizeStart={onResizeStart}
              onResizeing={onResizeing}
              onResizeEnd={onResizeEnd}
            >
              {renderItem ? (
                renderItem(item, true)
              ) : (
                <div
                  key={item.id}
                  style={{
                    height: '100%',
                    background: '#f9f1c7',
                    borderRadius: '6px',
                  }}
                ></div>
              )}
            </PreviewItem>
          ))}
          {mask && current.show && (
            <MoveMask
              width={boxSize.width}
              height={boxSize.height}
              gap={gap}
              column={current.column}
              row={current.row}
              x={current.x}
              y={current.y}
              isPutDown={isPutDown}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  border: '2px solid #2867f979',
                  backgroundColor: isPutDown ? '#2867f91c' : '#ff000055',
                  borderColor: isPutDown ? '#2c68f3' : '#ff000079',
                  borderRadius: '6px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: '600',
                }}
              >
                {isPutDown ? '可以放置' : '不可放置'}
              </div>
            </MoveMask>
          )}
        </div>
      </div>
    );
  },
);

export default DropContent;
