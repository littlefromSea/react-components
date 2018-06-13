import React, { Component } from 'react';
import Message from '../../components/Message';
import Button from '../../components/Button';
import './message.less';
class message extends Component{
  constructor(props){
    super(props);
    this.state = ({
      isTrue:false
    })
  }
  open1(){
    Message({
      message: '这是一条成功消息',
      type: 'success'
    });
  }
  open2(){
    Message({
      message: '这是一条错误消息',
      type: 'error'
    });
  }
  open3(){
    Message({
      message: '这是一条primary消息',
      type: 'primary'
    });
  }
  open4(){
    Message({
      message: '这是一条温馨提示',
      type: 'warning'
    });
  }
  render(){
    return (
      <div className="message">
          <div className="message-margin"><Button class="btn btn-success" onClick={this.open1.bind(this)}>消息提示</Button></div>
          <div className="message-margin"><Button class="btn btn-danger" onClick={this.open2.bind(this)}>消息提示</Button></div>
          <div className="message-margin"><Button class="btn" onClick={this.open3.bind(this)}>消息提示</Button></div>
          <div className="message-margin"><Button class="btn btn-warning" onClick={this.open4.bind(this)}>消息提示</Button></div>
      </div>
    )
  }
}

export default message;