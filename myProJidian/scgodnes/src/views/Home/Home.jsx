import React, { Component } from 'react';
import {Icon} from 'antd';

class Home extends Component {
  render(){
    return (
      <div>
        <span>欢迎登录</span><h1>奇点金融GOD管理系统</h1>
        <Icon type="menu-unfold" />
      </div>
    );
  }
}

export default Home;
