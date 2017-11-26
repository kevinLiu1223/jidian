// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;


import React, {Component} from 'react';


//List
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 0,
            list: new Map(),
            editList: new Map()
        };
    }

    componentDidMount() {
        // ()=>this.add()
    }

    add = () => {
        const key = ++this.state.key
        this.state.editList.set(key, {value: ''})
        this.forceUpdate()
        // this.setState({
        //     list: new Set(),
        //     editList: ['c','d']
        // })
        // console.log(this.state.list)

        // this.state.editList.add({value:''})
    }

    removeItem = (id) => {
        this.state.list.delete(id)
        this.forceUpdate()
    }

    removeEditor = (id) => {
        this.state.editLlist.delete(id)
        this.forceUpdate()
    }

    render() {
        const listDom = []
        const editListDom = []

        for (let entity of this.state.list) {
            listDom.push(<Item onRemove={this.removeItem} id={entity[0]} value={entity[1].value}/>)
        }

        for (let entity of this.state.editList) {
            editListDom.push(<ItemEditor onRemove={this.removeEditor} id={entity[0]} value={entity[1].value}/>)
        }

        return [
            <div>
                <button onClick={this.add} className="btn btn-default">add</button>
                <ul className="list-group">
                    {listDom}
                    {editListDom}
                </ul>
            </div>
        ]
    }
}


//Item
class Item extends Component {
    render() {
        return [
            <li className="list-group-item">{this.props.value + " " + this.props.children}
                <a className="right glyphicon glyphicon-edit" href="#"></a>
                <a className="right glyphicon glyphicon-remove" href="#"></a>
            </li>
        ]
    }
}

//ItemEditor
class ItemEditor extends Component {
    //this.props.onRemove
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }

    changeHandle(event){
        // this.state.value()
        this.setState({
            value:event.target.value
        })
        // this.foreUpdate()
    }

    remove = () => {
        this.props.onRemove(this.props.id)
    }

    render() {
        return <li className="list-group-item">
            <input type="text" className="item-edit" value={this.state.value}/>
            <a href="#" className="glyphicon glyphicon-share"></a>
            <a onClick={this.remove} href="#" className="glyphicon glyphicon-remove"></a>
        </li>
    }
}


class App extends Component {
    render() {
        return (
            <List/>
        )
    }
}

export default App;
