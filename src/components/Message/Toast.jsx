import React, { Component } from 'react';


class Toast extends Component{
  onClose(){
    console.log(1);
  }
  startTimeout(){
    this.timeout = setTimeout(()=>{
      this.onClose();
    },1000);
  }
  render(){
    var cox = '这是纯生';
    return(
      <div>{cox}</div>
    );
  }
};

export default Toast;