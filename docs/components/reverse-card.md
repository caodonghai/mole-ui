# 反转卡片

ReverseCard

## 基本使用

```tsx
import { ReverseCard } from 'mole-ui';
import { message } from "antd";

export default () => {

  const onClick = (isFlipped: boolean) => {
    console.log('Clicked', {isFlipped});
    message.success(isFlipped ? "我反转了" : "我反转回来了");
  };
  
  return (
    <ReverseCard
      width="300px"
      height="200px"
      frontContent={
        <div
          style={{
            background: 'linear-gradient(45deg, #3498db, #8e44ad)',
            color: 'white',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          我是正面
        </div>
      }
      backContent={
        <div
          style={{
            background: 'linear-gradient(45deg, #e74c3c, #f39c12)',
            color: 'white',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          我是背面
        </div>
      }
      onClick={onClick}
    />
  )
}
```

## 列表中使用


```tsx
import { ReverseCard } from 'mole-ui';
import { message } from "antd";
import { useState } from "react";

export default () => {

  const [dataSource, setDataSource] = useState<any[]>([{
    frontContent: '我是正面',
    backContent: '我是背面',
  }, {
    frontContent: '我是正面2',
    backContent: '我是背面2',
  }, {
    frontContent: '我是正面3',
    backContent: '我是背面3',
  }, {
    frontContent: '我是正面4',
    backContent: '我是背面4',
  }, {
    frontContent: '我是正面5',
    backContent: '我是背面5',
  }, {
    frontContent: '我是正面6',
    backContent: '我是背面6',
  }, {
    frontContent: '我是正面7',
    backContent: '我是背面7',
  }]); 
  
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        flexWrap: 'wrap',
      }}
    >
      {dataSource.map((item, index) => (
        <ReverseCard
          key={index}
          width="300px"
          height="200px"
          frontContent={
            <div
              style={{
                background: 'linear-gradient(45deg, #3498db, #8e44ad)',
                color: 'white',
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {item.frontContent}
            </div>
          }
          backContent={
            <div
              style={{
                background: 'linear-gradient(45deg, #e74c3c, #f39c12)',
                color: 'white',
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {item.backContent}
            </div>
          }
        />
      ))}
    </div>
  )
}
```

<API id="ReverseCard"></API>