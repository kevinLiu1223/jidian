import React, { Component } from 'react';
import styled from 'styled-components';
import { Table, Icon, Menu, Dropdown } from 'antd';


class TableInfo extends Component{
  render(){
    const { className } = this.props;
    return (
      <Table className={className}
        columns={this.props.columns}
        dataSource={this.props.data}
        scroll={this.props.scroll}
        pagination={this.props.pagination}
        size="middle"
        bordered
      />
    )
  }
}

export default styled(TableInfo)`
  margin-top: 12px;
  hr{
    margin-top: 20px ;
  }
  .ant-table-wrapper{
    margin-top: 20px;
  }
`;
