import React, { Component } from 'react';
//import rc from 'rc-react'; 
import {Button} from 'rc-react';//'../../components';
import './button.less';
class COM_Button extends Component{
  render(){
    return(
      <div className="rc-button">
      <h3>主要按钮</h3>
       <div className="main-button">
          <div style={{margin:'10px'}}><Button class="btn">默认按钮</Button></div>
          <div style={{margin:'10px'}}><Button class="btn btn-disabled" disabled>主要按钮</Button></div>
          <div style={{margin:'10px'}}><Button class="btn btn-success">成功按钮</Button></div>
          <div style={{margin:'10px'}}><Button class="btn btn-warning">警告按钮</Button></div>
          <div style={{margin:'10px'}}><Button class="btn btn-danger">危险按钮</Button></div>
        </div>
        <h3>带图标按钮</h3>
        <div className="main-button">
          <div style={{margin:'10px'}}><Button class="btn" icon="left"></Button></div>
          <div style={{margin:'10px'}}><Button class="btn btn-success" icon="notification"></Button></div>
          <div style={{margin:'10px'}}><Button class="btn" icon="phone"></Button></div>
          <div style={{margin:'10px'}}><Button class="btn btn-danger" icon="frown"></Button></div>
        </div>
      </div>
    )
  }
}

export default COM_Button;