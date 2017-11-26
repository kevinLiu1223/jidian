import React,{Component} from 'react';
import { Match, Route, Switch, Redirect } from 'react-router-dom';
import {Layout,Icon} from 'antd';
import styled from 'styled-components';

// import routes from '../../routes'
import './View.css';
import SiderBar from './SiderBar.jsx';
import Head from './Head.jsx';

import NoMatch from '../404/NoMatch.jsx';
const {Header,Footer,Sider,Content} = Layout;

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

class View extends Component {
  render(){
    const { className } = this.props;
    return (
        <Layout className={className}>
          <Sider><SiderBar location={this.props.location} routes={this.props.routes}></SiderBar></Sider>
          <Layout>
            <Header>
              <Head></Head>
            </Header>
            <Content style={{overflow:'initial'}}>
              <Switch>
              <Redirect exact={true} from='/' to='/home'/>
              {this.props.routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
              ))}
              <Route component={NoMatch}/>
              </Switch>
            </Content>
            <Footer></Footer>
          </Layout>
        </Layout>
    )

      {

        // <Switch>
        //   {routes.map((route,i)=>{
        //     if(route.name==='login')
        //       return false;
        //     return (
        //       <Route key={i} exact={route.exact?true:false} path={route.path} component={route.component } />
        //     )
        //   })}
        //   <Route component={NoMatch} />
        // </Switch>
      }
  }
}

export default styled(View)`
  hr {
    margin-bottom: 12px;
  }
`;
