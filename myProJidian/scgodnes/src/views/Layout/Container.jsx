import React,{Component} from 'react';

import Header from '../Layout/Header.jsx';
import View from '../Layout/View.jsx';

export default class Container extends Component{
  render(){
    return (
      <section className="container">
        <Header></Header>
        <View></View>
      </section>
    )
  }
}