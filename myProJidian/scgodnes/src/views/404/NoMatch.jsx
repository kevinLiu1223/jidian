import React,{Component} from 'react';
import styled from 'styled-components';

const NoMatch = ({ className }) => (
  <div className={className}>
    <h1>404 Not found <span>:(</span></h1>
    <p>Hmmm..., something's not right here.</p>
  </div>
)

export default styled(NoMatch)`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  border: 1px solid red;
  width: 1000px;
  height: 680px;
  padding: 30px 20px 50px;
  border: 1px solid #b3b3b3;
  border-radius: 4px;
  margin: 0 auto;
  box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;
  background: #fcfcfc;
  color: #737373;
  text-align: center;

  h1 {
    margin: 0 10px;
    font-size: 100px;
    color: #737373;
  }
  h1 span {
    color: #bbb;
  }
  h3 {
    margin: 1.5em 0 0.5em;
  }
  p {
    margin: 1em 0;
    font-size: 50px
  }
`;
