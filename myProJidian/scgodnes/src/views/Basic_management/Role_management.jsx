import React,{ Component } from 'react';
import { Form, Row, Col, Input, Button, Icon, Select, DatePicker } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';


import TableInfo from '../../components/form/TableInfo.jsx';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const dataFormat = 'YYYY/MM/DD'

class RoleForm extends Component{
  state = {
    expand: false,
    columns : [
      {
        title:'编号',
        dataIndex:'编号',
        key:'编号',
      },
      {
        title:'角色名称',
        dataIndex:'角色名称',
        key:'角色名称',
      },
      {
        title:'所含权限',
        dataIndex:'所含权限',
        key:'所含权限',
      }
      ,{
        title:'创建人',
        dataIndex:'创建人',
        key:'创建人',
      },
      {
        title:'创建时间',
        dataIndex:'创建时间',
        key:'创建时间',
      },
      {
        title:'操作',
        key:'操作',
        render:(text,record)=>(
          <span>
            <span className="ant-divider" />
            <Link to="/role_management_edit"> <Icon type="edit"></Icon> 编辑</Link>
            <span className="ant-divider" />
            <a href="#"><Icon type="delete"></Icon> 删除</a>
          </span>
        )
      }
    ],
    data: [
      {
        key : '1',
        "编号" : '12',
        "角色名称" : '权限分配',
        "所含权限" : ['CRM客户管理',' 用户账户'],
        "创建人" : '管理员',
        "创建时间" : '2017-10-22 11:21:02'
      },
      {
        key : '2',
        "编号" : '12',
        "角色名称" : '权限分配',
        "所含权限" : ['角色管理', '权限管理'],
        "创建人" : '管理员',
        "创建时间" : '2017-10-23 10:21:02'
      },
      {
        key : '3',
        "编号" : '12',
        "角色名称" : '权限分配',
        "所含权限" : ['角色管理', '权限管理'],
        "创建人" : '管理员',
        "创建时间" : '2017-10-23 10:21:02'
      },
      {
        key : '4',
        "编号" : '12',
        "角色名称" : '权限分配',
        "所含权限" : ['订单管理, 充/提列表, 订单报表, 资产管理, 资产机构, 支付列表, 清算流水, 产品管理, CRM客户管理, CRM销售管理, CRM用户数统计, 贴息管理, 合同管理, 投管报告, 用户账户, 奇点账户, 企业管理, 客户管理, 用户列表, 角色管理, 权限管理, 组织架构'],
        "创建人" : '管理员',
        "创建时间" : '2017-10-23 10:21:02'
      },
      {
        key : '5',
        "编号" : '12',
        "角色名称" : '权限分配',
        "所含权限" : ['角色管理', '权限管理'],
        "创建人" : '管理员',
        "创建时间" : '2017-10-23 10:21:02'
      },
    ],
    pagination: {
      showQuickJumper:true,
      defaultCurrent:1,
      total:50,
      onChange:this.onChange,
      pageSizeOptions:["10"]
    }
  };
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

  getFields() {
    const count = this.state.expand ? 12 : 8;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const children = [];
    const items = [
      {
        label:'角色名称',
        placeholder:"请输入角色名称",
        span:6,
        name:'角色名称',
        xl:5
      },
      {
        label:'拥有权限',
        placeholder:"单击选择拥有",
        span:6,
        name:'所属部门',
        type:'select',
        option:["这里应该是一个Dialog"],
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
          <Input placeholder={val.placeholder} />
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
    const { className } = this.props;
    return (
      <div className={className}>
        <h2>角色列表</h2>
        <hr/>
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSearch}
        >
          <Row gutter={40}>{this.getFields()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">过滤</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>重置</Button>
              <Link to="/role_management_add">
                <Button style={{ marginLeft: 8 }} type="primary" icon="plus-square" size="default">添加用户</Button>              
              </Link>
            </Col>
          </Row>
        </Form>
        <TableInfo
          columns={this.state.columns}
          data={this.state.data}
          pagination={this.state.pagination}
          scroll={{x:2000}}
        ></TableInfo>
      </div>
    );
  }
}
const Role_management = Form.create()(RoleForm);
export default Role_management;
