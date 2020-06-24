import React, {useEffect} from "react";
import {FormComponentProps} from "antd/lib/form";
import {Card, Form} from "antd";
import {PageHeaderWrapper} from "@ant-design/pro-layout";
import styles from './index.less';

interface I{{fileName}}Props extends FormComponentProps {
}


const {{fileName}}: React.FC<I{{fileName}}Props> = props => {

  useEffect(() => {

  }, []);

  return (
    <PageHeaderWrapper title={false}>
      <Card bordered={false}>

      </Card>

    </PageHeaderWrapper>
  )
};

export default Form.create<I{{fileName}}Props>({})({{fileName}});
