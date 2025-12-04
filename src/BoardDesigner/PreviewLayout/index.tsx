import React, { useEffect, useRef, useState } from 'react';
import { DragItemData } from '../interface';

import './index.scss';

interface PreviewLayoutProps {
  /** 数据源 */
  data: DragItemData[];
  /** 列 */
  column?: number;
  /** 行 */
  row?: number;
  /** 间隔 */
  gap?: number;
  /** 容器圆角 */
  borderRadius?: string;
  renderItem?: (item: DragItemData, designable?: boolean) => React.ReactNode;
}

const PreviewLayout: React.FC<PreviewLayoutProps> = ({
  data,
  column = 0,
  row = 0,
  gap = 0,
  borderRadius = '6px',
  renderItem,
}) => {
  const previewLayoutRef = useRef<HTMLDivElement>(null);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  const [columnCount, setColumnCount] = useState(column);
  const [rowCount, setRowCount] = useState(row);

  // 计算网格行列数
  useEffect(() => {
    if (data && data.length > 0) {
      const xCoords: number[] = [];
      const yCoords: number[] = [];
      data.forEach((item) => {
        xCoords.push(item.x + item.column);
        yCoords.push(item.y + item.row);
      });
      setColumnCount(Math.max(...xCoords, column));
      setRowCount(Math.max(...yCoords, row));
    } else {
      setColumnCount(column);
      setRowCount(row);
    }
  }, [data, column, row]);

  // 计算格子尺寸
  useEffect(() => {
    const updateBoxSize = () => {
      if (previewLayoutRef.current) {
        const { width, height } =
          previewLayoutRef.current.getBoundingClientRect();
        setBoxSize({
          width: (width - (columnCount - 1) * gap) / columnCount,
          height: (height - (rowCount - 1) * gap) / rowCount,
        });
      }
    };

    updateBoxSize();
    window.addEventListener('resize', updateBoxSize);
    return () => window.removeEventListener('resize', updateBoxSize);
  }, [columnCount, rowCount, gap]);

  const getPreviewStyle = ({ x, y, row, column }: DragItemData) => {
    return {
      // grid 下标从 1 开始, 需要 + 1
      gridArea: `${y + 1} / ${x + 1} / ${y + row + 1} / ${x + column + 1}`,
    };
  };

  return (
    <div ref={previewLayoutRef} className="preview-layout">
      <div
        className="preview-layout__container"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columnCount}, ${boxSize.width}px)`,
          gridTemplateRows: `repeat(${rowCount}, ${boxSize.height}px)`,
          gap: `${gap}px`,
        }}
      >
        {data.map((item, i) => (
          <div
            key={`${item.key}${i}`}
            className="preview-layout__item"
            style={{
              ...getPreviewStyle(item),
              borderRadius: borderRadius,
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              {renderItem ? (
                renderItem(item, false)
              ) : (
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
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewLayout;
