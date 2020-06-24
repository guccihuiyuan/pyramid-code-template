import React, {useState} from "react";
import {Modal} from "antd";

interface I{{fileName}}Props  {
  visible: boolean;
  params?: any;
  close: (data?: any) => void;
}

const {{fileName}}: React.FC<I{{fileName}}Props> = props => {
  const [visible, setVisible] = useState(props.visible);

  const closeModal = (data?: any) => {
    setVisible(false);
    setTimeout(() => {
      props.close(data);
    },300);
  };

  return (
    <Modal
      destroyOnClose={true}
      title={'模态框'}
      width={1024}
      visible={visible}
      onOk={() => {
        closeModal();
      }}
      okText={'确定'}
      cancelText={'取消'}
      onCancel={() => {
        closeModal();
      }}
    >

    </Modal>
  )
};

export default {{fileName}};
