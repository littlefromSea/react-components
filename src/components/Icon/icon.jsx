import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/iconfont/iconfont.css';
import './icon.less';
class Icon extends Component{
  render(){
    const {name,size,color} = this.props;
    return(
      <i style={{fontSize:size+'px',color:color}} className={`${'icon anticon'} ${name}`}></i>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string
}

export default Icon;