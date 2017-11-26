import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter , Router, HashRouter, Match, Route, Link, hashHistory, StaticRouter, browserHistory, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
// import createHistory from 'history/createBrowserHistory';

import { Http } from './http';
import History from './routes/history';
import './reset.css';
import routes from './routes';
const history = createHistory();

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => {
    route.enterChangeRoute(props.match);
    return <route.component {...props} routes={route.routes}/>
  }
  }/>
)

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      collapsed:false,
      isLogin:false,
      match:{}
    }
  }
  // there is reserve global variable, but try not to use it
  static childContextTypes = {
    info: PropTypes.object
  }
  getChildContext(){
    return {
      info:{
        userName:'test global variable'
      }
    }
  }
  toggle = ()=>{
    this.setState({
      collapsed:!this.state.collapsed
    })
  }
  componentDidMount(){
    const isLogin=localStorage.getItem("token")?true:false;
    this.setState({isLogin});
    if(!isLogin){
      history.push('/login');
    }
  }
  shouldComponentUpdate(val,nval){
    if(val.match===nval.match){
      return false;
    }
    if(val.isLogin===nval.isLogin){
      return false;
    }
  }
  enterChangeRoute=(match)=>{
    const isLogin=localStorage.getItem("token")?true:false;
    this.setState({match})
    this.setState({isLogin});
    if(!isLogin){
      if(match.path!=='/login'){
        history.push('/login');
      }
    }
    if(isLogin){
      if(match.path==='/login'){
        history.push('/');
      }
    }
  }
  render(){
    return (
      <Router history = { history } >
        <div>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} enterChangeRoute={this.enterChangeRoute}/>
            ))}
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
