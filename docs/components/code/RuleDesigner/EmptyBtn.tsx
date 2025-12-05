import { Button } from 'antd';
import { RuleDesigner } from 'mole-ui';
import { fieldDataList } from './mock';

export default () => (
  <RuleDesigner fieldList={fieldDataList} >
    <Button type="dashed">我的自定义按钮</Button>
  </RuleDesigner>
);
