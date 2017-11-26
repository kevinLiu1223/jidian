import React, {Component} from 'react';

import Login from '../views/Login/Login.jsx';
import View from '../views/Layout/View.jsx';
import Home from '../views/Home/Home.jsx';
import OrderDepository from '../views/Order_depository/Order_depository.jsx';
import OrderDepositoryDetail from '../views/Order_depository/Order_depository_detail.jsx';
import OrderDepositoryEdit from '../views/Order_depository/Order_depository_edit.jsx';
import OrderDepositoryFixedRenew from '../views/Order_depository/Order_depository_fixedRenew.jsx';
import UserManagement from '../views/Basic_management/User_management.jsx';
import RoleManagement from '../views/Basic_management/Role_management.jsx';
import RoleManagementEdit from '../views/Basic_management/Role_management_edit.jsx';
import RoleManagementAdd from '../views/Basic_management/Role_management_add.jsx';

let routesNosider = [
  {
    path:"/login",
    name:"login",
    component:Login
  },
  {
    path:"/",
    name:"home",
    component:View,
    routes:[
      {
        path:"/home",
        name:"home",
        component:Home,
      },
      {
        path:"/order_depository",
        name:"order_depository",
        exact:true,
        component:OrderDepository,
      },
      {
        path:"/order_depository/detail",
        name:"Order_depository_detail",
        component:OrderDepositoryDetail
      },
      {
        path:"/order_depository/edit",
        name:"Order_depository_edit",
        component:OrderDepositoryEdit
      },
      {
        path:"/order_depository/fixedRenew",
        name:"Order_depository_fixedRenew",
        component:OrderDepositoryFixedRenew
      },
      {
        path : "/user_management",
        name : "User_management",
        component : UserManagement
      },
      {
        path : "/role_management",
        name : "Role_management",
        exact : true,
        component : RoleManagement
      },
      {
        path : "/role_management_edit",
        name : "Role_management_edit",
        component : RoleManagementEdit
      },
      {
        path : "/role_management_add",
        name : "Role_management_add",
        component : RoleManagementAdd
      }
    ]
  }
]

routesNosider.map(val=>{
  val.siderbar = ()=> {
    return <span data-currentRoute={val.name}></span>;
  };
})
const routes = routesNosider;
export default routes;
