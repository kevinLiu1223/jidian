import React, {Component} from 'react';
import { Modal } from 'antd';

class ScModal extends Component {
  constructor(props){
    super(props);
    this.state={
      value:this.props.value,
    }
  }
  onOk=()=>{
    this.props.onCreate(this.state.value)
  }

  render() {
    const { children } = this.props;
    return (
      <Modal
        visible={this.props.visible}
        title={this.props.title}
        okText="OK"
        onCancel={this.props.onCancel}
        onOk={this.props.onCreate}>
        {children}
      </Modal>
    );
  }
}

export default ScModal;
