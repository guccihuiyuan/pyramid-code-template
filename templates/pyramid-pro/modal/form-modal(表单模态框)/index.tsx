import React, {useState} from "react";
import {FormComponentProps} from "antd/lib/form";
import {Form, Input, Modal} from "antd";
import {modalService} from "@/core/services/modal.service";
import {COMPONENT_CONFIG} from "@/core/configs/component.config";
import {VALIDATE_CONFIG} from "@/core/configs/validate.config";

const FormItem = Form.Item;

interface I{{fileName}}Props extends FormComponentProps {
  visible: boolean;
  params?: any;
  close: (data?: any) => void;
}

const {{fileName}}: React.FC<I{{fileName}}Props> = props => {
  const [visible, setVisible] = useState(props.visible);

  const {form, form: { getFieldDecorator } } = props;

  const closeModal = (data?: any) => {
    setVisible(false);
    setTimeout(() => {
      props.close(data);
    },300);
  };

  const handleSubmit = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // const params: any = {...fieldsValue};

      modalService.confirm('是否确认该操作?', () => {
        closeModal(true);
      });
    });
  };

  return (
    <Modal
      destroyOnClose={true}
      title={'模态框'}
      width={1024}
      visible={visible}
      onOk={() => {
        handleSubmit();
      }}
      okText={'确定'}
      cancelText={'取消'}
      onCancel={() => {
        closeModal();
      }}
    >
      <Form {...COMPONENT_CONFIG.ANT_DESIGN.Form.FormItem}>
        <FormItem label="名称">
          {getFieldDecorator(`roleName`, {
            initialValue: '',
            rules: [
              {
                required: true,
                message: '必填',
              },
              VALIDATE_CONFIG.emptyChar,
            ],
          })(<Input placeholder="请输入" />)}
        </FormItem>
        <FormItem label="值">
          {getFieldDecorator(`roleValue`, {
            initialValue: '',
            rules: [
              {
                required: true,
                message: '必填',
              },
              VALIDATE_CONFIG.emptyChar,
            ],
          })(<Input placeholder="请输入" />)}
        </FormItem>
      </Form>
    </Modal>
  )
};

export default Form.create<I{{fileName}}Props>()({{fileName}});
