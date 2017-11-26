import React,{Component} from 'react';
import { Form, Modal, Row, Col, Input, Icon, Button, Table} from 'antd';


const FormItem = Form.Item;

class FormModal extends Component{
  constructor(props){
    super(props);
    this.state={
      value:this.props.value,
    }
  }
  
  currentChoice(text){
    console.log(text['公司名称']);
    this.props.form.setFieldsValue({title:text['公司名称']})
    this.setState({value:text['公司名称']})
  }
  onOk=()=>{
    this.props.onCreate(this.state.value)
  }
  handleChange = (e)=>{
    this.setState({value:e.target.value})
  }
  render(){
    const {getFieldDecorator} = this.props.form;
    
    const columns = [
      {
        title:'序号',
        dataIndex:'xuhao',
        key:'xh',
        width:50,
      },
      {
        title:'公司名称',
        dataIndex:'公司名称',
        key:'公司名称'
      },
      {
        title:'操作',
        key:'操作',
        width:50,
        render:(text,record)=>(
          <Button onClick={this.currentChoice.bind(this,text)}>选择</Button>
        )
      }
    ]
    const data = [
      {
        key:1,
        xuhao:1,
        "公司名称":"沙发垫"
      }
    ]
    const pagination = {
      showQuickJumper:true,
      defaultCurrent:1,
      total:50,
      onChange:onChange,
      pageSizeOptions:["5"]
    }
 
    const onChange = (currentPage) => {
      console.log("currentPage>>>",currentPage);
    }
    const handleReset = () => {
      this.props.form.resetFields();
      this.setState({value:this.props.value})
    }
    const handleSearch = (e) =>{
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        console.log('Received values of form: ', values);
      });
    }
    return (
      <Modal
        visible={this.props.visible}
        title="选择公司"
        okText="OK"
        onCancel={this.props.onCancel}
        onOk={this.onOk}
      >
        <Form
          className="ant-advanced-search-form"
          onSubmit={handleSearch}
        >
          <FormItem label="公司名称" style={{margin:"0 20px"}}>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'It is required !' }],
              initialValue:this.props.value,
              setFieldsValue:this.state.value
            })(
                      <Input autoComplete="off" style={{width:200}} onChange={this.handleChange} />
            )}
            <Row>
              <Col span={24} style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit">Search</Button>
                <Button style={{ marginLeft: 8 }} onClick={handleReset}>Clear</Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem style={{margin:"0 20px"}}>
            <Table
              columns={columns}
              dataSource={data}
              size="small"
              bordered
              pagination={pagination}
            />
          </FormItem>
        </Form>
      </Modal>
    )
  }
}
  

const ModalForm = Form.create()(FormModal)

export default ModalForm;
