import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import logo from './logo.svg';
import './index.css';
class Index extends Component{
  constructor(props){
      super(props);
      this.state = ({
         indexContent:'我是主页'
      });
  }
  render(){
    return(
      <div className="App">
        <div className="App-header"><img className="App-logo" src={logo} alt="logo"/></div>
        <div><NavLink to="/button">按钮</NavLink></div>
        <div><NavLink to="/collapse">折叠面板</NavLink></div>
        <div><NavLink to="/icon">Icon字体</NavLink></div>
        <div><NavLink to="/message">message</NavLink></div>
        <div><NavLink to="/input">input输入</NavLink></div>
      </div>
    );
  }
}

export default Index;