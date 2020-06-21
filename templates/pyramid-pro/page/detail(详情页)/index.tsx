import {FormComponentProps} from "antd/lib/form";
import React from "react";
import {Card, Form} from "antd";
import {PageHeaderWrapper} from "@ant-design/pro-layout";
import styles from './index.less';

interface I{{fileName}}Props extends FormComponentProps {
}

const {{fileName}}: React.FC<I{{fileName}}Props> = props => {
  return (
    <PageHeaderWrapper title={false}>
      <Card>
      </Card>
    </PageHeaderWrapper>
  )
};

export default Form.create<I{{fileName}}Props>({})({{fileName}});
