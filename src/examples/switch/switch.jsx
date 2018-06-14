import React, { Component } from 'react';
import {Switch} from '../../components';

class COM_Switch extends Component{
  constructor(props){
     super(props);
     this.state = {
       value:true
     }
  }
  getValue(e){
    this.setState({
      value:!this.state.value
    });
  }
   render(){
     return(
       <div>
          <Switch value={this.state.value} onChange={this.getValue.bind(this)} />
          <div>{this.state.value?'true':'false'}</div>
       </div>
     )
   }
}

export default COM_Switch;