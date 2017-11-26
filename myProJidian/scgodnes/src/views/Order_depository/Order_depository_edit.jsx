import React,{ Component } from 'react';
import { Form, Row, Col, Input, Button, Icon, Upload } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
class OrderForm extends Component{
  state = {
    action:'/#',
    onChange({file,fileList}){
      if(file.status!=="uploadding"){
        console.log(file,fileList);
      }
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    History.History.push("/order_depository");
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("success!");
  }


  getFields() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
      return (
        <Col >
        <FormItem
          {...formItemLayout}
          label="合同替换"
        >
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              initialValue:[
                {
                  uid:1,
                  name:"已有的.png",
                  status:"done",
                  reponse:"Server Error 500",
                  url:'scapital.com/已有的.png'
                }
              ]
            })(
              <Upload {...this.state}>
                <Button>
                  <Icon type="upload" />
                  选择文件
                </Button>
              </Upload>
            )}
          </div>
        </FormItem>

        </Col>
      );
    
  }
  
  render(){
    return (
      <div>
        <h2>存管订单管理/编辑订单合同</h2>
        <hr style={{margin: "20px 0"}}/>
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSubmit}
        >
          <Row gutter={40}>{this.getFields()}</Row>
          <Row>
            <Col span={23} style={{ textAlign: 'center' }}>
              <Button type="primary" size="large" onClick={this.handleClick} >back</Button>
              <Button style={{marginLeft:20}} type="primary" size="large" htmlType="submit" >save</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
  const Order_depository = Form.create()(OrderForm);
  export default Order_depository;