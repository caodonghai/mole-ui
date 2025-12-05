import { RuleDesigner } from 'mole-ui';
import { useState } from 'react';
import { Modal, Button } from 'antd';
import { fieldDataList } from './mock';

export default () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button type="primary" onClick={handleOpen}>
        规则设计
      </Button>

      <Modal
        title="规则设计"
        open={open}
        width="80vw"
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
        bodyStyle={{ height: '600px' }}
      >
        <RuleDesigner fieldList={fieldDataList} />
      </Modal>
    </>
  );
};
