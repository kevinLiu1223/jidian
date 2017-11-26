import React,{Component} from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import createHistory from 'history/createHashHistory';


import './Login.css';
const history = createHistory();
const FormItem = Form.Item;

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isError:false
    }
  }
  handleSubmit = (e) => { 
    e.preventDefault();
    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if(values.userName==='admin'&&values.password==='123'){
          localStorage.setItem(
            "token","this is imitation token!"
          );
          this.props.form.resetFields();
          history.replace('/');
        }else{
          this.setState({isError:true},()=>{
            this.props.form.validateFields(['userName','password'], { force: true });
          });
        }
      }
      
    });
  }
  handleChange = (e)=>{
    this.setState({isError:false})
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <h1>奇点后台</h1>
        <Form onSubmit={this.handleSubmit} onChange={this.handleChange} className="login-form">
          <FormItem >
            {getFieldDecorator('userName', {
              rules: [
                { required: true, whitespace:true, message: 'Please input your username!' },
                { validator:(rule,value,callback)=>{
                    if(this.state.isError){
                      callback('error');
                    }else{
                      callback();
                    }
                }}
              ],
              validateFirst:true,
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const Login = Form.create()(LoginForm);
export default Login;