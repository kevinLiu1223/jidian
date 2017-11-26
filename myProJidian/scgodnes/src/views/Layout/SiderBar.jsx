import React, {Component} from 'react';
import { Link ,Route, location} from 'react-router-dom';
import { Menu, Icon, Avatar } from 'antd';


import './SiderBar.css';

const {SubMenu} = Menu;
const SiderBarList = [
  {
    key:'sub1',
    title:'存管订单',
    type:'mail',
    subs:[
      {
        key:'/order_depository',
        title:'存管订单',
        to:'/order_depository'
      },
      {
        key:'/charge_depository',
        title:'充/提列表',
        to:'/charge_depository'
      }
    ]
  },
  {
    key:'sub2',
    title:'订单管理',
    type:'mail',
    subs:[
      {
        key:'/order_management',
        title:'订单管理',
        to:'/order_management'
      },
      {
        key:'/charge_withdraw',
        title:'充/提列表',
        to:'/charge_withdraw'
      },
      {
        key:'/order_report',
        title:'订单报表',
        to:'/order_report'
      }
    ]
  },
  {
    key:'sub3',
    title:'资产管理',
    type:'mail',
    subs:[
      {
        key:'6',
        title:'资产管理',
        to:''
      },
      {
        key:'7',
        title:'资产机构',
        to:''
      },
      {
        key:'8',
        title:'企业资产',
        to:''
      },{
        key:'9',
        title:'申赎报表',
        to:''
      }
    ]
  },
  {
    key:'sub4',
    title:'支付管理',
    type:'mail',
    subs:[
      {
        key:'10',
        title:'支付列表',
        to:''
      },
      {
        key:'11',
        title:'清算流水',
        to:''
      },
      {
        key:'12',
        title:'清算对账',
        to:''
      }
    ]
  },
  {
    key:'sub5',
    title:'产品管理',
    type:'mail',
    subs:[
      {
        key:'13',
        title:'产品管理',
        to:''
      }
    ]
  },
  {
    key:'sub6',
    title:'CRM管理',
    type:'mail',
    subs:[
      {
        key:'14',
        title:'CRM客户管理',
        to:''
      },
      {
        key:'15',
        title:'CRM销售管理',
        to:''
      },
      {
        key:'16',
        title:'CRM用户数统计',
        to:''
      }
    ]
  },
  {
    key:'sub7',
    title:'运营管理',
    type:'mail',
    subs:[
      {
        key:'17',
        title:'贴息管理',
        to:''
      },
      {
        key:'18',
        title:'合同管理',
        to:''
      },
      {
        key:'19',
        title:'投管报告',
        to:''
      }
    ]
  },
  {
    key:'sub8',
    title:'账户管理',
    type:'mail',
    subs:[
      {
        key:'20',
        title:'用户账户',
        to:''
      },
      {
        key:'21',
        title:'奇点账户',
        to:''
      }
    ]
  },
  {
    key:'sub9',
    title:'客户管理',
    type:'mail',
    subs:[
      {
        key:'22',
        title:'企业管理',
        to:''
      },
      {
        key:'23',
        title:'客户管理',
        to:''
      }
    ]
  },
  {
    key:'sub10',
    title:'基础管理',
    type:'mail',
    subs:[
      {
        key:'/user_management',
        title:'用户列表',
        to:'/user_management'
      },
      {
        key:'/role_management',
        title:'角色管理',
        to:'/role_management'
      },
      {
        key:'/entitlement_management',
        title:'权限管理',
        to:'/entitlement_management'
      },
      {
        key:'/organization_management',
        title:'组织架构',
        to:'/organization_management'
      },
      {
        key:'/profit_grab',
        title:'抓取收益',
        to:'/profit_grab'
      }
    ]
  }
]

const rootSub = [];
SiderBarList.map(val=>{
  rootSub.push(val.key);
})

class SiderBar extends Component{
  rootSubmenuKeys=rootSub;
  state = {
    openKeys: [],
    selectedKeys:[]
  };
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  onClick=({item ,key , keyPath}) => {
    this.setState({selectedKeys:[key,this.state.openKeys[0]]})
  }
  componentDidMount(){
    SiderBarList.map(sub=>{
      sub.subs.find(subs=>{
        if(subs.to === this.props.location.pathname){
          let openKeys = [];
          let selectedKeys = [];
          openKeys.push(sub.key);
          selectedKeys.push(subs.to);
          this.setState({openKeys,selectedKeys});         
        }
      })
    })
  }
  render(){
    return (
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          theme="dark"
          selectedKeys={this.state.selectedKeys}
          onClick={this.onClick}
          style={{width: "100%",overflowY:"auto",height:"100%"}}
        >
          <span>{}</span>
          <div className="logo">
            <a href="javascript:void(0);">
              <h1>奇点后台</h1>
            </a>
          </div>
          <Avatar size="large" icon="user"></Avatar>
          <div className="welcome-user">欢迎，{`管理员`}</div>
          <Menu.ItemGroup title="交易相关">
          {SiderBarList.map((val,i)=>{
            if(i<5){
              return (
                <SubMenu key={val.key} title={<span><Icon type={val.type} /><span>{val.title}</span></span>}>
                  {val.subs.map(sub=>{
                    return (
                      <Menu.Item key={sub.key}>
                        <Link to={sub.to}>{sub.title}</Link>
                      </Menu.Item>
                    )
                  })}
                </SubMenu>
                )
              }
          })}
          </Menu.ItemGroup>
          <Menu.ItemGroup title="运营相关">
          {SiderBarList.map((val,i)=>{
            if(i>4){
              return (
                <SubMenu key={val.key} title={<span><Icon type={val.type} /><span>{val.title}</span></span>}>
                  {val.subs.map(sub=>{
                    return (
                      <Menu.Item key={sub.key}>
                        <Link to={sub.to}>{sub.title}</Link>
                      </Menu.Item>
                    )
                  })}
                </SubMenu>
                )
              }
          })}
          </Menu.ItemGroup>
        </Menu>
    )
  }
}

export default SiderBar;
