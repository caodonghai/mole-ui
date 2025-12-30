# 文本高亮

HighLight

## 基础用法

```jsx
import { HighLight } from 'mole-ui';

export default () => {
  return (
    <HighLight
      text="人工智能的浪潮正以前所未有的力量席卷全球，重塑着我们社会的每一个角落。从深度学习的突破性进展到大型语言模型的惊艳表现，技术的核心驱动力在于其让机器从海量数据中自主学习与迭代的能力。这带来了效率的极大提升，例如在医疗领域，AI辅助诊断系统已在某些特定病症的识别上达到了超越人类专家的准确率；在教育领域，自适应学习平台能够为每个学生规划独一无二的成长路径。然而，这场变革绝非只有玫瑰色的前景。我们同样必须直面其带来的严峻挑战：算法中可能潜藏的社会偏见、大规模数据收集引发的隐私危机，以及自动化对就业市场的冲击所导致的经济结构性失衡。因此，未来的关键并不在于技术本身能走多快，而在于我们——作为创造者和规范者——如何为其设立智慧的航标。我们最终的目标，是构建一个以人为中心、技术向善的智能时代，确保这股强大的力量能够赋能于人，而非替代或异化人类的价值与尊严。这条道路需要技术专家、政策制定者与每一位公民的审慎思考与共同参与。"
      highLightContext={[
        {
          highLightText: "智能",
          color: "#66CCCC",
        },
        {
          highLightText: "算法",
          color: "#0000FF",
        },
        {
          highLightText: "数据",
          color: "#FF66FF",
        },
        {
          highLightText: "技术",
          color: "#0099FF",
        },
      ]}
    />
  );
}
```

## 处理函数用法

```jsx
import { HighLight } from 'mole-ui';
export default () => {
  return (
    <HighLight
      text="人工智能的浪潮正以前所未有的力量席卷全球，重塑着我们社会的每一个角落。从深度学习的突破性进展到大型语言模型的惊艳表现，技术的核心驱动力在于其让机器从海量数据中自主学习与迭代的能力。这带来了效率的极大提升，例如在医疗领域，AI辅助诊断系统已在某些特定病症的识别上达到了超越人类专家的准确率；在教育领域，自适应学习平台能够为每个学生规划独一无二的成长路径。然而，这场变革绝非只有玫瑰色的前景。我们同样必须直面其带来的严峻挑战：算法中可能潜藏的社会偏见、大规模数据收集引发的隐私危机，以及自动化对就业市场的冲击所导致的经济结构性失衡。因此，未来的关键并不在于技术本身能走多快，而在于我们——作为创造者和规范者——如何为其设立智慧的航标。我们最终的目标，是构建一个以人为中心、技术向善的智能时代，确保这股强大的力量能够赋能于人，而非替代或异化人类的价值与尊严。这条道路需要技术专家、政策制定者与每一位公民的审慎思考与共同参与。"
      highLightContext={[
        {
          highLightText: "智能",
          handler: (text) => `<span style="color: #FF00FF; background-color: #FFFF00">${text}</span>`,
        },
        {
          highLightText: "算法",
          handler: (text) => {
            return `<span style="color: #fff; background-color: #000; display: inline-block; border-radius: 6px; padding: 0 6px">${text}</span>`;
          },
        },
        {
          highLightText: "数据",
          handler: (text) => `<span style="color: #FF66FF">${text}</span>`,
        },
        {
          highLightText: "技术",
          handler: (text) => `<span style="color: #0099FF">${text}</span>`,
        },
      ]}
    />
  );
}
```

## API

### HighLight

<API id="HighLight"></API>

### IHighLightContext

<API id="IHighLightContext" interface="IHighLightContext" src="../../src/HighLight/index.tsx"></API>
