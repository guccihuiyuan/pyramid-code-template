import {FormComponentProps} from "antd/lib/form";
import React from "react";
import {Card, Form} from "antd";
import {PageHeaderWrapper} from "@ant-design/pro-layout";
import {Description} from "@/components/Description";
import {DescriptionItem} from "@/components/Description/DescriptionItem";

interface I{{fileName}}Props extends FormComponentProps {
}

const {{fileName}}: React.FC<I{{fileName}}Props> = props => {
  return (
    <PageHeaderWrapper title={false}>
      <Card style=\{{marginBottom: 24}} title={<span className={'custom-card-title'}>充值单信息</span>}>
        <Description>
          <DescriptionItem title=\{{content: '充值单号：' , size: 'sm'}} content={'wx48465411654'} />
          <DescriptionItem title=\{{content: '下单时间：' , size: 'sm'}} content={'2020-02-02 16:00:00'} />
          <DescriptionItem title=\{{content: '所属区域：' , size: 'sm'}} content={'贵阳市-观山湖'} />
          <DescriptionItem title=\{{content: '活动名称：' , size: 'sm'}} content={'外卖'} />
          <DescriptionItem title=\{{content: '充值金额(元)：' , size: 'sm'}} content={'外送'} />
          <DescriptionItem title=\{{content: '获得金额(元)：' , size: 'sm'}} content={'微信支付'} />
        </Description>
      </Card>

      <Card title={<span className={'custom-card-title'}>买家信息</span>}>
        <Description>
          <DescriptionItem title=\{{content: '买家昵称：' , size: 'sm'}} content={'wx48465411654'} />
          <DescriptionItem title=\{{content: '买家手机号：' , size: 'sm'}} content={'2020-02-02 16:00:00'} />
        </Description>
      </Card>
    </PageHeaderWrapper>
  )
};

export default Form.create<I{{fileName}}Props>({})({{fileName}});
