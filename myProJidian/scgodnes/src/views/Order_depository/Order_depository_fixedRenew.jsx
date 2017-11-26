import React,{ Component } from 'react';
import { Table, Form, Row, Col, Input, Select, DatePicker, Button, Icon, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

import TableInfo from '../../components/form/TableInfo.jsx';
import InputNumber from '../../components/form/InputNumber.jsx';

const FormItem = Form.Item;
const {RangePicker} = DatePicker;
const dataFormat = "YYYY/MM/DD";
const {Option} = Select;
class OrderDepositoryFixed extends Component{
  constructor(props){
    super(props);
    this.state={
      columns : [
        {
          title:'序号',
          dataIndex:'xuhao',
          key:'xh',
        },
        {
          title:'企业名称',
          dataIndex:'企业名称',
          key:'企业名称',
        },
        {
          title:'专属客服',
          dataIndex:'专属客服',
          key:'专属客服',
        }
        ,{
          title:'订单编号',
          dataIndex:'订单编号',
          key:'订单编号',
        },
        {
          title:'理财产品',
          dataIndex:'理财产品',
          key:'理财产品',
        },
        {
          title:'产品类型',
          dataIndex:'产品类型',
          key:'产品类型',
        },
        {
          title:'总收益',
          dataIndex:'总收益',
          key:'总收益',
        },
        {
          title:'原始收益',
          dataIndex:'原始收益',
          key:'原始收益',
        },
        {
          title:'贴息收益',
          dataIndex:'贴息收益',
          key:'贴息收益',
        },
        {
          title:'订单类型',
          dataIndex:'订单类型',
          key:'订单类型',
        },
        {
          title:'订单状态',
          dataIndex:'订单状态',
          key:'订单状态',
        },
        {
          title:'订单金额',
          dataIndex:'订单金额',
          key:'订单金额',
        },
        {
          title:'支付类型',
          dataIndex:'支付类型',
          key:'支付类型',
        },
        {
          title:'下单时间',
          dataIndex:'下单时间',
          key:'下单时间',
        },
        {
          title:'支付完成时间',
          dataIndex:'支付完成时间',
          key:'支付完成时间',
        },
        {
          title:'操作日',
          dataIndex:'操作日',
          key:'操作日',
        },
        {
          title:'起息时间',
          dataIndex:'起息时间',
          key:'起息时间',
        },
        {
          title:'回款日',
          dataIndex:'回款日',
          key:'回款日',
        },
        {
          title:'到期处理方式',
          dataIndex:'到期处理方式',
          key:'到期处理方式',
        },
        {
          title:'产品选择',
          dataIndex:'产品选择',
          key:'产品选择',
        },
        {
          title:'操作类型',
          dataIndex:'操作类型',
          key:'操作类型',
        },
        {
          title:'订单来源',
          dataIndex:'订单来源',
          key:'订单来源',
        },
        {
          title:'合同信息',
          dataIndex:'合同信息',
          key:'合同信息',
        },
        {
          title:'可操作金额',
          dataIndex:'可操作金额',
          key:'可操作金额',
        }
      ],
      data :[
        {
          key:'1',
          "xuhao":'1',
          "企业名称":"存管测试企业",
          "专属客服":"未绑定",
          "订单编号":"SG17101824888",
          "理财产品":"活期T+1",
          "产品类型":"活期",
          "总收益":"0.00",
          "原始收益":"0.00",
          "贴息收益":"0.00",
          "订单类型":"申购",
          "订单状态":"已完成",
          "订单金额":"1000000.00",
          "支付类型":"余额支付",
          "下单时间":"2017-10-18 18:28:54",
          "支付完成时间":"2017-10-18 18:28:54",
          "操作日":"2017-10-18",
          "起息时间":"2017-10-18",
          "到期日":"2017-10-18",
          "回款日":"2017-10-18",
          "到期处理方式":"定转活",
          "产品选择":"案件法拉手",
          "操作类型":"客户操作",
          "订单来源":"invest",
          "合同信息":"无",
          "可操作金额":"1000000.00",
        },
        {
          key:'2',
          "xuhao":'2',
          "企业名称":"存管测试企业",
          "专属客服":"未绑定",
          "订单编号":"SG17101824888",
          "理财产品":"活期T+1",
          "产品类型":"活期",
          "总收益":"0.00",
          "原始收益":"0.00",
          "贴息收益":"0.00",
          "订单类型":"申购",
          "订单状态":"已完成",
          "订单金额":"1000000.00",
          "支付类型":"余额支付",
          "下单时间":"2017-10-18 18:28:54",
          "支付完成时间":"2017-10-18 18:28:54",
          "操作日":"2017-10-18",
          "起息时间":"2017-10-18",
          "到期日":"2017-10-18",
          "回款日":"2017-10-18",
          "到期处理方式":"定转活",
          "产品选择":"案件法拉手",
          "操作类型":"客户操作",
          "订单来源":"invest",
          "合同信息":"无",
          "可操作金额":"1000000.00",
        },
        {
          key:'3',
          "xuhao":'3',
          "企业名称":"存管测试企业",
          "专属客服":"未绑定",
          "订单编号":"SG17101824888",
          "理财产品":"活期T+1",
          "产品类型":"活期",
          "总收益":"0.00",
          "原始收益":"0.00",
          "贴息收益":"0.00",
          "订单类型":"申购",
          "订单状态":"已完成",
          "订单金额":"1000000.00",
          "支付类型":"余额支付",
          "下单时间":"2017-10-18 18:28:54",
          "支付完成时间":"2017-10-18 18:28:54",
          "操作日":"2017-10-18",
          "起息时间":"2017-10-18",
          "到期日":"2017-10-18",
          "回款日":"2017-10-18",
          "到期处理方式":"定转活",
          "产品选择":"案件法拉手",
          "操作类型":"客户操作",
          "订单来源":"invest",
          "合同信息":"无",
          "可操作金额":"1000000.00",
        },
        {
          key:'4',
          "xuhao":'4',
          "企业名称":"存管测试企业",
          "专属客服":"未绑定",
          "订单编号":"SG17101824888",
          "理财产品":"活期T+1",
          "产品类型":"活期",
          "总收益":"0.00",
          "原始收益":"0.00",
          "贴息收益":"0.00",
          "订单类型":"申购",
          "订单状态":"已完成",
          "订单金额":"1000000.00",
          "支付类型":"余额支付",
          "下单时间":"2017-10-18 18:28:54",
          "支付完成时间":"2017-10-18 18:28:54",
          "操作日":"2017-10-18",
          "起息时间":"2017-10-18",
          "到期日":"2017-10-18",
          "回款日":"2017-10-18",
          "到期处理方式":"定转活",
          "产品选择":"案件法拉手",
          "操作类型":"客户操作",
          "订单来源":"invest",
          "合同信息":"无",
          "可操作金额":"1000000.00",
        },
        {
          key:'5',
          "xuhao":'5',
          "企业名称":"存管测试企业",
          "专属客服":"未绑定",
          "订单编号":"SG17101824888",
          "理财产品":"活期T+1",
          "产品类型":"活期",
          "总收益":"0.00",
          "原始收益":"0.00",
          "贴息收益":"0.00",
          "订单类型":"申购",
          "订单状态":"已完成",
          "订单金额":"1000000.00",
          "支付类型":"余额支付",
          "下单时间":"2017-10-18 18:28:54",
          "支付完成时间":"2017-10-18 18:28:54",
          "操作日":"2017-10-18",
          "起息时间":"2017-10-18",
          "到期日":"2017-10-18",
          "回款日":"2017-10-18",
          "到期处理方式":"定转活",
          "产品选择":"案件法拉手",
          "操作类型":"客户操作",
          "订单来源":"invest",
          "合同信息":"无",
          "可操作金额":"1000000.00",
        }
      ],
      pagination: {
        showQuickJumper:true,
        defaultCurrent:1,
        total:50,
        onChange:this.onChange,
        pageSizeOptions:["10"]
      }
      
    }
  }
  onChange=(currentPage) => {
    console.log("currentPage>>>",currentPage);
  }
  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }
  handleCancel = () => {
    History.History.push("/order_depository");
  }
  handleChange = (e) => {
    if(!e||!e.target){
      return e
    }
    return e.target.value
  }

  getFields() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    };
    const children = [];
    const items = [
      {
        label:'续存产品',
        span:6,
        name:'续存',
        type:'select',
        option:['奇点定期2天','奇点定期7天'],
        xl:5
      },
      {
        label:'金额',
        placeholder:"请输入金额",
        span:6,
        name:'金额',
        type:'number',
        xl:5
      },
      {
        label:'是否公开显示',
        value:'是',
        span:6,
        name:'是否公开',
        disabled:true,
        xl:5
      },
      {
        label:'产品年化收益率(%)',
        span:6,
        name:'年化收益率',
        disabled:true,
        xl:5
      },
      {
        label:'产品类型',
        span:6,
        name:'产品类型',
        value:'定期',
        disabled:true,
        xl:5
      },
      {
        label:'产品年化收益率(%)',
        span:6,
        name:'年化收益率',
        disabled:true,
        xl:5
      },
      {
        label:'产品年化收益率(%)',
        span:6,
        name:'年化收益率',
        disabled:true,
        xl:5
      },
      {
        label:'产品年化收益率(%)',
        span:6,
        name:'年化收益率',
        disabled:true,
        xl:5
      },
      {
        label:'产品年化收益率(%)',
        span:6,
        name:'年化收益率',
        disabled:true,
        xl:5
      },
      {
        label:'产品年化收益率(%)',
        span:6,
        name:'年化收益率',
        disabled:true,
        xl:5
      },
    ];
    items.map((val,i)=>{
      let inputType;
      switch (val.type) {
        case 'select': inputType=getFieldDecorator(val.name,{
          getValueFromEvent:this.handleChange
        })(
          <Select >
          {val.option.map((val,i)=>(<Option key={i} value={val}>{val}</Option>))}
          </Select>
        )
          break;

          case 'time': inputType=getFieldDecorator(val.name)(
            <RangePicker format={dataFormat} />
          )
            break;

          case 'number': inputType=getFieldDecorator(val.name,{
            getValueFromEvent:this.handleChange
          })(
            <InputNumber  />
          )
            break;
      
        default: inputType=getFieldDecorator(val.name,{
          getValueFromEvent:this.handleChange
        })(
          <Input autoComplete="off" placeholder={val.placeholder} disabled={val.disabled?val.disabled:false} /> 
        )
          break;
      }
      children.push(
        <Col span={val.span} xl={val.xl} key={i}>
          <FormItem {...formItemLayout} label={val.label}>
            {
              inputType
            }
          </FormItem>
        </Col>
      );
    })
    return children;
  }
  render(){
    return (
      <div>
        <h2>到期操作/续存</h2>
        <hr/>
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSearch}
        >
          <TableInfo
            columns={this.state.columns}
            data={this.state.data}
            pagination={this.state.pagination}
            scroll={{x:2700}}
          ></TableInfo>
          <Row gutter={40}>{this.getFields()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">OK</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleCancel}>Cancel</Button>
            </Col>
          </Row>
        </Form>
        
      </div>
    )
  }
}
const OrderDepositoryFixedRenew = Form.create()(OrderDepositoryFixed);
export default OrderDepositoryFixedRenew;