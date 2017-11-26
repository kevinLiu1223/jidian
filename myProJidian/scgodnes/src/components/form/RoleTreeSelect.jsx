import React, {Component} from 'react';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

const treeData = [{
  title: '奇点金融',
  key: '0-0',
  children: [{
    title: '存管订单模块组',
    key: '0-0-0',
    children: [
      { title: '存管订单', key: '0-0-0-0', children: [
        { title: '[添加订单]', key: '0-0-0-0-0'},
        { title: '[编辑订单]', key: '0-0-0-0-1'},
        { title: '[续存订单]', key: '0-0-0-0-2'},
        { title: '[通过订单]', key: '0-0-0-0-3'},
        { title: '[取消订单]', key: '0-0-0-0-4'},
        { title: '[赎回订单]', key: '0-0-0-0-5'},
        { title: '[支付确认]', key: '0-0-0-0-6'},
        { title: '[编辑合同]', key: '0-0-0-0-7'},
        { title: '[赎回审核]', key: '0-0-0-0-8'},
        { title: '[支付确认]', key: '0-0-0-0-9'},
        { title: '[赎回确认]', key: '0-0-0-0-10'},
        { title: '[定期续存]', key: '0-0-0-0-11'},
        { title: '[回余额]', key: '0-0-0-0-12'},
        { title: '[活转定]', key: '0-0-0-0-13'},
        { title: '[到期操作确认订单]', key: '0-0-0-0-14'},
      ] },
      { title: '0-0-0-1', key: '0-0-0-1' },
      { title: '0-0-0-2', key: '0-0-0-2' },
    ],
  }, {
    title: '0-0-1',
    key: '0-0-1',
    children: [
      { title: '0-0-1-0', key: '0-0-1-0' },
      { title: '0-0-1-1', key: '0-0-1-1' },
      { title: '0-0-1-2', key: '0-0-1-2' },
    ],
  }, {
    title: '0-0-2',
    key: '0-0-2',
  }],
}, {
  title: '0-1',
  key: '0-1',
  children: [
    { title: '0-1-0-0', key: '0-1-0-0' },
    { title: '0-1-0-1', key: '0-1-0-1' },
    { title: '0-1-0-2', key: '0-1-0-2' },
  ],
}, {
  title: '0-2',
  key: '0-2',
}];

export default class RoleTreeSelect extends Component {
  state = {
    expandedKeys: this.props.expandedKeys,
    autoExpandParent: true,
    checkedKeys: this.props.checkedKeys,
    selectedKeys: this.props.selectedKeys
  }
  onExpand = (expandedKeys) => {
    console.log('onExpand', arguments);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }
  
  
  renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });
  }
  render() {
    return (
      <Tree
        checkable
        onExpand={this.onExpand}
        expandedKeys={this.state.expandedKeys}
        autoExpandParent={this.state.autoExpandParent}
        onCheck={this.props.onCheck}
        checkedKeys={this.props.checkedKeys}
        onSelect={this.props.onSelect}
        selectedKeys={this.state.selectedKeys}
      >
        {this.renderTreeNodes(treeData)}
      </Tree>
    );
  }
}
