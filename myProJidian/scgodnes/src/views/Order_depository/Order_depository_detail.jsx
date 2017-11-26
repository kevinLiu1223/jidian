import React,{ Component } from 'react';
import { Form, Row, Col, Input, Button, Icon, DatePicker, Select, Modal, Table } from 'antd';
import moment from 'moment';


import ModalForm from '../../components/form/ModelForm.jsx';

const FormItem = Form.Item;
const { Option } = Select;
const dataFormat = 'YYYY/MM/DD'


class OrderForm extends Component{
  state = {
    visible:false,
    items:{
      company:{
        label:'企业名称',
        name:'企业',
        value:"公司1",
        type:'modal',
      },
      amount:{
        label:'账户余额',
        span:11,
        name:'账户余额',
        value:"123123",
        disabled:true,
        xl:10
      },
      orderAmount:{
        label:'订单金额',
        span:11,
        name:'订单金额',
        value:"123123",
        disabled:true,
        xl:10
      },
      orderType:{
        label:'订单类型',
        span:11,
        name:'orderType',
        value:"申购",
        type:'select',
        option:['申购','赎回','续存','活转定','定转活'],
        xl:10
      },
      productType:{
        label:'产品类型',
        span:11,
        name:'productType',
        value:"定期",
        type:"select",
        option:['活期','定期'],
        xl:10
      },
      product:{
        label:'理财产品',
        span:11,
        name:'理财产品',
        value:"T+1",
        disabled:true,
        xl:10
      },
      payType:{
        label:'支付类型',
        span:11,
        name:'订单状态',
        value:"余额支付",
        disabled:true,
        xl:10
      }
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    History.History.push("/order_depository");
  }
  showModal = ()=> {
    this.setState({visible:true});
  }
  cancleModal = () => {
    this.setState({visible:false});
  }
  saveModalFormRef = (form) => {
    this.form = form;
  }
  changeModal=(val)=> {
    console.log("val>>",val);
    let items=this.state.items;
    items.company.value=val;
    this.setState({items});
    const form = this.form;
    form.validateFields((err,values)=>{
      if(err)
        return;
      form.resetFields();
      this.setState({visible:false})
    })
  }
  handleSelectChange(val,i){
    let items=this.state.items;
    items[i].value=val;
    this.setState({items});
  }
  render(){
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    return (
      <div>
        <h2>存管订单管理/查看详情</h2>
        <hr style={{margin: "20px 0"}}/>
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSearch}
          onChange={this.handleChange}
        >
          <Row gutter={40}>
            <Col span="11" >
              <FormItem {...formItemLayout} label={this.state.items.company.label}>
              <div>
                <Input onClick={this.showModal} value={this.state.items.company.value}/>
                <ModalForm
                  ref={this.saveModalFormRef}
                  visible={this.state.visible}
                  onCancel={this.cancleModal}
                  onCreate={this.changeModal}
                  value={this.state.items.company.value}
                />
              </div>
              </FormItem>
            </Col>
            <Col span="11" >
              <FormItem {...formItemLayout} label={this.state.items.amount.label}>
                <Input value={this.state.items.amount.value} disabled />
              </FormItem>
            </Col>
            <Col span="11" >
              <FormItem {...formItemLayout} label={this.state.items.orderAmount.label}>
                <Input value={this.state.items.orderAmount.value} disabled />
              </FormItem>
            </Col>
            <Col span="11" >
              <FormItem {...formItemLayout} label={this.state.items.orderType.label}>
                <Select onChange={(val)=>{this.handleSelectChange(val,this.state.items.orderType.name)}} value={this.state.items.orderType.value} >
                {this.state.items.orderType.option.map((val,i)=>(<Option key={i} value={val} >{val}</Option>))}
                </Select>
              </FormItem>
            </Col>
            <Col span="11" >
              <FormItem {...formItemLayout} label={this.state.items.productType.label}>
                <Select onChange={(val)=>{this.handleSelectChange(val,this.state.items.productType.name)}} value={this.state.items.productType.value}>
                {this.state.items.productType.option.map((val,i)=>(<Option key={i} value={val} >{val}</Option>))}
                </Select>
              </FormItem>
            </Col>
            <Col span="11" >
              <FormItem {...formItemLayout} label={this.state.items.product.label}>
                <Input value={this.state.items.product.value} disabled />
              </FormItem>
            </Col>
            <Col span="11" >
              <FormItem {...formItemLayout} label={this.state.items.payType.label}>
                <Input value={this.state.items.payType.value} disabled />
              </FormItem>
            </Col>
            {
              /*
              <Col span="11" xl="10" >
                <FormItem {...formItemLayout} label={val.label}>
                  <RangePicker format={dataFormat} />
                </FormItem>
              </Col>
              <Col span="11" xl="10" >
                <FormItem {...formItemLayout} label={this.state.items.amount.label}>
                  <Input placeholder={val.placeholder} disabled={val.disabled?val.disabled:false} />
                </FormItem>
              </Col>
              */
            }
          </Row>
          <Row>
            <Col span={23} style={{ textAlign: 'right' }}>
              <Button type="primary" size="large" onClick={this.handleClick} >back</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
  const Order_depository = Form.create()(OrderForm);
  export default Order_depository;
