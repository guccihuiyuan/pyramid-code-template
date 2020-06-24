import React, {useEffect, useState} from "react";
import {FormComponentProps} from "antd/lib/form";
import {Button, Card, Form, Input, Select} from "antd";
import {PageHeaderWrapper} from "@ant-design/pro-layout";
import {SimpleTable} from "@pyramid-kit/component";

interface I{{fileName}}Props extends FormComponentProps {
}


const {{fileName}}: React.FC<I{{fileName}}Props> = props => {
  const [simpleTable, setSimpleTable] = useState<SimpleTable<any> | null>(null);
  const [extraParams, setExtraParams] = useState<object>({});

  const [types, setTypes] = useState<any[]>([]);

  // const [modalVisible, setModalVisible] = useState<boolean>(false);
  // const [modalParams, setModalParams] = useState<any | undefined>(undefined);

  useEffect(() => {
    setTypes([]);
  }, []);
  useEffect(() => {
    if (simpleTable) {
      extraParamsChange();
    }
  }, [simpleTable]);
  useEffect(() => {
    if (simpleTable) {
      simpleTable.loadData({ current: 1 });
    }
  }, [extraParams]);

  const {form, form: { getFieldDecorator } } = props;

  const extraParamsChange = () => {
    const params = { ...form.getFieldsValue() };
    setExtraParams(params);
  };

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '类型',
      dataIndex: 'type',
    },
  ];

  const renderTitle = () => {
    return (
      <Form
        layout="inline"
        onSubmit={e => {
          e.preventDefault();
          extraParamsChange();
        }}
      >
        <Form.Item>
          {getFieldDecorator('name')(<Input placeholder="名称" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('type')(
            <Select mode="multiple" style=\{{ width: '174px' }} placeholder="类型" allowClear={true}>
              {types.map(data => {
                return (
                  <Select.Option value={data.value} key={data.value}>
                    {data.label}
                  </Select.Option>
                );
              })}
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
              extraParamsChange();
            }}
            style=\{{ marginLeft: 8 }}
          >
            重置
          </Button>
        </Form.Item>
      </Form>
    )
  };

  return (
    <PageHeaderWrapper title={false} content={renderTitle()}>
      <Card bordered={false}>
        <SimpleTable
          ref={(ref: SimpleTable<any> | null) => {
            if (ref) {
              setSimpleTable(ref);
            }
          }}
          dataSource={[
            {id: 1},
            {id: 2},
          ]}
          rowHoverActions={[
            {
              text: '详情',
              onClick: (record: any) => {
              }
            }
          ]}
          extraParams={extraParams}
          columns={tableColumns}
          url={''}
          initLoadData={false}
          showPagination={true}
          showOrderNumber={true}
          resReName=\{{ list: 'data.list', total: 'data.total' }}
          reqReName=\{{ page: { pageNo: 'pageNum' } }}
        />
      </Card>

      {/*{*/}
      {/*  modalVisible ? (*/}
      {/*    <AddModal*/}
      {/*      visible={modalVisible}*/}
      {/*      params={modalParams}*/}
      {/*      close={success => {*/}
      {/*        setModalParams(undefined);*/}
      {/*        setModalVisible(false);*/}
      {/*        if (success) {*/}
      {/*          simpleTable?.loadData();*/}
      {/*        }*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  ): null*/}
      {/*}*/}

    </PageHeaderWrapper>
  )
};

export default Form.create<I{{fileName}}Props>({})({{fileName}});
