import React,{ Component } from 'react';
import { Form, Row, Col, Input, Button, Icon, DatePicker, Select, TreeSelect, Modal, Table } from 'antd';
import moment from 'moment';
import styled from 'styled-components';

import RoleTreeSelect from '../../components/form/RoleTreeSelect.jsx';
import ScModal from '../../components/form/ScModal.jsx';

const FormItem = Form.Item;
const { Option } = Select;
const dataFormat = 'YYYY/MM/DD'


class RoleForm extends Component{
  state = {
    visible:false,
    role:{
      label:'角色名称',
      name:'角色名称',
      value:"",
      disable:true
    },
    permission:{
      label:'角色权限',
      span:23,
      name:'角色权限',
      value:"",
      type:'modal',
      xl:10
    },
    remark:{
      label:'备注',
      span:23,
      name:'备注',
      value:"",
      xl:10
    },
    checkedKeys: ['0-0-0-1'],
    expandedKeys: ['0-0-0'],
  };
  //树状选择触发事件
  onCheck = (checkedKeys) => {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  }

  handleClick = (e) => {
    e.preventDefault();
    History.History.push("/role_management");
  }
  showModal = ()=> {
    this.setState({visible:true});
  }
  cancleModal = () => {
    this.setState({visible:false});
    console.log(this.state.checkedKeys);
  }
  changeModal=(val)=> {
    console.log("val>>",val);
    let permission=this.state.permission;
    permission.value=this.state.checkedKeys;
    this.setState({permission});
    
    this.setState({visible:false});
  }
  remarkChange = (e) => {
    let remark = this.state.remark;
    remark.value = e.target.value;
    this.setState({remark});
  }
  handleSubmit = () => {
    console.log('角色名称>>>',this.state.role.value);
    console.log('角色权限>>>',this.state.permission.value);
    console.log('备注>>>',this.state.remark.value);
  }
  changeRole = (e) => {
    let role = this.state.role;
    role.value = e.target.value;
    this.setState({role});
  }
  render(){
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const { className } = this.props;
    return (
      <div className={className}>
        <h2>添加角色</h2>
        <hr style={{margin: "20px 0"}}/>
        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch} onChange={this.handleChange} >
          <Row gutter={40}>
            <Col span="11">
              <FormItem {...formItemLayout} label={this.state.role.label}>
                <Input value={this.state.role.value} onChange={this.changeRole} />
              </FormItem>
            </Col>
            <Col span="11" >
              <FormItem {...formItemLayout} label={this.state.permission.label}>
              <div>
                <Input onClick={this.showModal} value={this.state.permission.value}/>
                <ScModal
                  ref={this.saveModalFormRef}
                  visible={this.state.visible}
                  onCancel={this.cancleModal}
                  onCreate={this.changeModal}
                  value={this.state.permission.value}>
                  <RoleTreeSelect
                    checkedKeys={this.state.checkedKeys}
                    expandedKeys={this.state.expandedKeys}
                    selectedKeys={this.state.selectedKeys}
                    onCheck={this.onCheck}
                  />
                </ScModal>
              </div>
              </FormItem>
            </Col>
            <Col span="11" >
              <FormItem {...formItemLayout} label={this.state.remark.label}>
                <Input placeholder="在这里输入备注" value={this.state.remark.value} onChange={this.remarkChange}/>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={23} style={{ textAlign: 'right' }}>
              <Button type="primary" size="large" onClick={this.handleSubmit} >Submit</Button>
              <Button type="primary" size="large" onClick={this.handleClick} >Cancel</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const Role_management_add = Form.create()(RoleForm);
export default styled(Role_management_add)`
  Col {
    display: block;
  }
  Button {
    margin: 0 10px;
  }
`;
