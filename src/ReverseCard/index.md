# ReverseCard

反转卡片

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

<API id="ReverseCard"></API>