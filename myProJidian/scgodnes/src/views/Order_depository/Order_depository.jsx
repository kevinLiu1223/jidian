import React,{ Component } from 'react';
import { Form, Row, Col, Input, Button, Icon, Select, DatePicker, message } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import accounting from 'accounting'

import TableInfo from '../../components/form/TableInfo.jsx';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const dataFormat = 'YYYY/MM/DD'
/*
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
*/
class OrderForm extends Component{
  constructor(props){
    super(props);
    this.state={
      expand: false,
      columns : [
        {
          title:'序号',
          dataIndex:'xuhao',
          key:'xh',
        },
        {
          title:'企业名称',
          dataIndex:'company',
          key:'企业',
        },
        {
          title:'专属客服',
          dataIndex:'closer',
          key:'专属',
        }
        ,{
          title:'订单编号',
          dataIndex:'orderId',
          key:'订单编号',
        },
        {
          title:'理财产品',
          dataIndex:'product',
          key:'理财产品',
        },
        {
          title:'产品类型',
          dataIndex:'productType',
          key:'产品类型',
        },
        {
          title:'总收益',
          dataIndex:'profit',
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
          dataIndex:'orderType',
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
        },
        {
          title:'操作',
          key:'操作',
          render:(text,record)=>(
            <span>
              <Link to="/order_depository/fixedRenew"> <Icon type="exception"></Icon> 到期处理</Link>
              <span className="ant-divider" />
              <Link to="/order_depository/detail"> <Icon type="search"></Icon> 查看详情</Link>
              <span className="ant-divider" />
              <Link to="/order_depository/edit"> <Icon type="edit"></Icon> 编辑合同</Link>
              <span className="ant-divider" />
              <a href="#"><Icon type="download"></Icon> 下载拨付单</a>
            </span>
          )
        }
      ],
      data:[],
      pagination: {
        showQuickJumper:true,
        defaultCurrent:1,
        total:100,
        onChange:this.onChange,
        pageSizeOptions:["10"]
      }
    }
  }
  componentWillMount(){
    Http.Order.Depository.List.get().then(response=>{
      if(response.status===200){
          return response
      }
    }).then(response=>{
      if(response.data.code===0){
        let data = response.data.data.list;
        data.map((val,i)=>{
          val.key= ++i;
          val.xuhao= i;
          val.profit = accounting.formatMoney(val.profit, "￥ ", 2); // ￥ -500,000
          
        })
        let pagination = this.state.pagination;
        pagination.total = data.length;
        this.setState({data,pagination});
      }
    }).catch(error=>{
      message.error('出错了');
    })
  }
  onChange(currentPage) {
    console.log("currentPage>>>",currentPage);
  }
  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }
  getFields() {
    const count = this.state.expand ? 12 : 8;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const children = [];
    const items = [
      {
        label:'企业名称',
        placeholder:"请输入企业名称",
        span:6,
        name:'企业',
        xl:5
      },
      {
        label:'订单编号',
        placeholder:"请输入订单编号",
        span:6,
        name:'编号',
        xl:5
      },
      {
        label:'产品名称',
        placeholder:"请输入产品名称",
        span:6,
        name:'产品名称',
        xl:5
      },
      {
        label:'产品类型',
        placeholder:"请输入产品类型",
        span:6,
        name:'产品类型',
        type:'select',
        option:["定期","活期"],
        xl:5
      },
      {
        label:'子类型',
        placeholder:"请输入子类型",
        span:6,
        name:'子类型',
        type:'select',
        option:["T+0","T+1"],
        xl:5
      },
      {
        label:'订单类型',
        placeholder:"请输入全称",
        span:6,
        name:'订单类型',
        option:["申购","赎回","续存"],
        type:'select',
        xl:5
      },
      {
        label:'订单状态',
        placeholder:"请输入全称",
        span:6,
        name:'订单状态',
        option:["待审核","待支付","支付中"],
        type:'select',
        xl:5
      },
      {
        label:'支付类型',
        placeholder:"请输入全称",
        span:6,
        name:'支付类型',
        type:'select',
        option:["线下支付","余额支付"],
        xl:5
      },
      {
        label:'到期操作',
        placeholder:"请输入全称",
        span:6,
        name:'到期操作',
        type:'select',
        option:["转余额","续存"],
        xl:5
      },
      {
        label:'订单时间',
        placeholder:"请输入全称",
        span:6,
        name:'订单时间',
        type:'time',
        xl:5
      },
      {
        label:'到期时间',
        placeholder:"请输入全称",
        span:6,
        name:'到期时间',
        type:'time',
        xl:5
      },
      {
        label:'回款时间',
        placeholder:"请输入全称",
        span:6,
        name:'回款时间',
        type:'time',
        xl:5
      },
    ];
    items.map((val,i)=>{
      let inputType;
      switch (val.type) {
        case 'select': inputType=getFieldDecorator(val.name)(
          <Select >
          {val.option.map((val,i)=>(<Option key={i} value={val}>{val}</Option>))}
          </Select>
        )
          break;

          case 'time': inputType=getFieldDecorator(val.name)(
            <RangePicker format={dataFormat} />
          )
            break;

        default: inputType=getFieldDecorator(val.name)(
          <Input autoComplete="off" placeholder={val.placeholder} />
        )
          break;
      }
      children.push(
        <Col span={val.span} xl={val.xl} key={i} style={{ display: i < count ? 'block' : 'none' }}>
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
        <h2>存管订单管理/存管订单列表</h2>
        <hr/>
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSearch}
        >
          <Row gutter={40}>{this.getFields()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">Search</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>Clear</Button>
              <Button style={{ marginLeft: 8 }} type="primary" icon="download" size="default">Download</Button>
              <Button style={{ marginLeft: 8 }} type="primary" icon="plus-square" size="default">add</Button>
              <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
              </a>
            </Col>
          </Row>
        </Form>
        <TableInfo
          columns={this.state.columns}
          data={this.state.data}
          pagination={this.state.pagination}
          scroll={{x:2700}}
        ></TableInfo>
      </div>
    );
  }
}
  const Order_depository = Form.create()(OrderForm);
  export default Order_depository;
