import React,{ Component } from 'react';
import { Input, Tooltip } from 'antd';
/**
 * 通过传入onChange的回调函数让组件修改外面的值
 * 
 * @export
 * @class InputNumber
 * @extends {Component}
 */
export default class InputNumber extends Component{
  constructor(props){
    super(props);

  }
  formatNumber = (value) => {
    value += '';
    const list = value.split('.');
    const prefix = list[0].charAt(0) === '-' ? '-' : '';
    let num = prefix ? list[0].slice(1) : list[0];
    let result = '';
    while (num.length > 3) {
      result = `,${num.slice(-3)}${result}`;
      num = num.slice(0, num.length - 3);
    }
    if (num) {
      result = num + result;
    }
    return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
  }
  onChange = (e) => {
    const {value} = e.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.([0-9]{0,2}))?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.props.onChange(value);
    }
  }
  onBlur = () => {
    const { value, onBlur, onChange } = this.props;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      onChange({ value: value.slice(0, -1) });
    }
    if (onBlur) {
      onBlur();
    }
  }
  render(){
    const title = this.props.value ? (
      <span className="numeric-input-title">
        {this.props.value !== '-' ? this.formatNumber(this.props.value) : '-'}
      </span>
    ) : '请输入金额';
    return (
      <Tooltip
        trigger={['focus']}
        title={title}
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        <Input
          {...this.props}
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder="请输入金额"
          maxLength="25"
          autoComplete="off"
        />
      </Tooltip>
    );
  }
}
