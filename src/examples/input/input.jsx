import React,{Component} from 'react';
import {Input} from 'rc-react';//'../../components/Input';

class COM_Input extends Component{
  getValue(e){
    console.log(e.target.value);
  }
  render(){
    return(
      <div style={{padding:"6px"}}>
          <h4 style={{padding:'8px 0',margin:'0'}}>基础用法</h4>
          <Input placeholder="请输入内容" onBlur={this.getValue.bind(this)} /> 

          <h4 style={{padding:'8px 0',margin:'0'}}>禁用状态</h4>
          <Input disabled placeholder="请输入内容" /> 

          <h4 style={{padding:'8px 0',margin:'0'}}>文本域</h4>
          <Input type="textarea" placeholder="请输入内容" autoSize={true} />

          <h4 style={{padding:'8px 0',margin:'0'}}>rows 文本域</h4> 
          <Input type="textarea" placeholder="请输入内容" maxlength={40} rows={10} /> 

          <h4 style={{padding:'8px 0',margin:'0'}}>large 输入框</h4>
          <Input placeholder="请输入内容" size="large" /> 

          <h4 style={{padding:'8px 0',margin:'0'}}>small 输入框</h4>
          <Input placeholder="请输入内容" size="small" /> 
          
          <h4 style={{padding:'8px 0',margin:'0'}}>mini 输入框</h4>
          <Input placeholder="请输入内容" size="mini" /> 
      </div>
    )
  }
}

export default COM_Input;