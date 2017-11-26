import React,{ Component } from 'react';
import { Form, Row, Col, Input, Button, Icon, Select, DatePicker } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';

import TableInfo from '../../components/form/TableInfo.jsx';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const dataFormat = 'YYYY/MM/DD'

class UserForm extends Component{
  state = {
    expand: false,
    columns : [
      {
        title:'工号',
        dataIndex:'工号',
        key:'工号',
      },
      {
        title:'用户姓名',
        dataIndex:'用户姓名',
        key:'用户姓名',
      },
      {
        title:'邮箱',
        dataIndex:'邮箱',
        key:'邮箱',
      }
      ,{
        title:'职位',
        dataIndex:'职位',
        key:'职位',
      },
      {
        title:'部门',
        dataIndex:'部门',
        key:'部门',
      },
      {
        title:'角色',
        dataIndex:'角色',
        key:'角色',
      },
      {
        title:'创建时间',
        dataIndex:'创建时间',
        key:'创建时间',
      },
      {
        title:'创建人',
        dataIndex:'创建人',
        key:'创建人',
      },
      {
        title:'操作',
        key:'操作',
        render:(text,record)=>(
          <span>
            <span className="ant-divider" />
            <Link to="/user_management"> <Icon type="edit"></Icon> 编辑</Link>
            <span className="ant-divider" />
            <a href="#"><Icon type="delete"></Icon> 删除</a>
          </span>
        )
      }
    ],
    data: [
      {
        key : '1',
        "工号" : '354',
        "用户姓名" : 'test',
        "邮箱" : 'test@163.com',
        "职位" : '测试',
        "部门" : '销售组',
        "角色" : '销售',
        "创建时间" : '2017-09-08',
        "创建人" : '管理员'
      },
      {
        key : '2',
        "工号" : '354',
        "用户姓名" : 'test',
        "邮箱" : 'test@163.com',
        "职位" : '测试',
        "部门" : '销售组',
        "角色" : '销售',
        "创建时间" : '2017-09-08',
        "创建人" : '管理员'
      },
      {
        key : '3',
        "工号" : '374',
        "用户姓名" : 'test2',
        "邮箱" : 'test2@163.com',
        "职位" : '测试',
        "部门" : '产品组',
        "角色" : '测试',
        "创建时间" : '2017-09-10',
        "创建人" : '管理员'
      },
      {
        key : '4',
        "工号" : '272',
        "用户姓名" : '思清',
        "邮箱" : 'siqing@scapital.com',
        "职位" : '前端',
        "部门" : '技术组',
        "角色" : '前端开发',
        "创建时间" : '2017-09-11',
        "创建人" : '管理员'
      },
      {
        key : '5',
        "工号" : '777',
        "用户姓名" : '雨田',
        "邮箱" : 'yutian@scapital.com',
        "职位" : '前端',
        "部门" : '技术组',
        "角色" : '前端开发',
        "创建时间" : '2017-09-08',
        "创建人" : '管理员'
      },
      {
        key : '6',
        "工号" : '666',
        "用户姓名" : '紫光',
        "邮箱" : 'ziguang@scapital.com',
        "职位" : '前端',
        "部门" : '技术组',
        "角色" : '前端开发',
        "创建时间" : '2017-09-01',
        "创建人" : '管理员'

      },
      {
        key : '7',
        "工号" : '000',
        "用户姓名" : 'admin',
        "邮箱" : 'admin@scapital.com',
        "职位" : '管理员',
        "部门" : '无',
        "角色" : '管理员',
        "创建时间" : '1999-12-31',
        "创建人" : '无'
      }
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
        label:'用户姓名',
        placeholder:"请输入用户姓名",
        span:8,
        name:'用户姓名',
        xl:7
      },
      {
        label:'职位',
        placeholder:"请输入职位",
        span:8,
        name:'职位',
        xl:7
      },
      {
        label:'所属部门',
        placeholder:"选择所属部门",
        span:8,
        name:'所属部门',
        type:'select',
        option:["技术组","产品组", "金融组", "销售组", "人事组"],
        xl:7
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
        <h2>用户列表</h2>
        <hr/>
        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
          <Row gutter={40}>{this.getFields()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">过滤</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>重置</Button>
              <Button style={{ marginLeft: 8 }} type="primary" icon="plus-square" size="default">添加用户</Button>
            </Col>
          </Row>
        </Form>
        <TableInfo
          columns={this.state.columns}
          data={this.state.data}
          pagination={this.state.pagination}
          scroll={{x:800}}
        ></TableInfo>
      </div>
    );
  }
}

const User_management = Form.create()(UserForm);
export default User_management;
