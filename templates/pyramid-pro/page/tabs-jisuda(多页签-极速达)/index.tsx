import React, {useEffect, useState} from "react";
import {FormComponentProps} from "antd/lib/form";
import {Form} from "antd";
import {PageHeaderWrapper} from "@ant-design/pro-layout";
// import ManComponent from './index/man';


interface I{{fileName}}Props extends FormComponentProps {
}

const {{fileName}}: React.FC<I{{fileName}}Props> = props => {
  const tabs = ['订单设置', '结算设置', '提现设置', '运费补贴设置', '推荐搜索设置'];
  const [tabIndex, setTabIndex] = useState<number>(1);


  useEffect(() => {
  }, []);

  const renderTitle = () => {
    return (
      <>
        <div className={'custom-tabs'} style=\{{marginBottom: 28}}>
          {
            tabs.map((tab, index) => {
              return (
                <span key={tab} className={tabIndex === index + 1 ? 'custom-tab-active' : ''} onClick={() => {
                  setTabIndex(index + 1);
                }}>{tab}</span>
              )
            })
          }
        </div>
      </>
    )
  };

  return (
    <PageHeaderWrapper title={false} content={renderTitle()}>
      {/*{*/}
      {/*  tabIndex === 1 ? <ManComponent tableParams={extraParams} /> : null*/}
      {/*}*/}
      {/*{*/}
      {/*  tabIndex === 2 ? <OsComponent tableParams={extraParams} /> : null*/}
      {/*}*/}
    </PageHeaderWrapper>
  )
};

export default Form.create<I{{fileName}}Props>({})({{fileName}});
