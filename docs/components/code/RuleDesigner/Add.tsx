import { RuleDesigner } from 'mole-ui';
import { fieldDataList } from './mock';

export default () => <RuleDesigner fieldList={fieldDataList} maxDepth={5} />;
