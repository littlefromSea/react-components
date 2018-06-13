import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import './button.less'

class Button extends Component {
    onClick(e){
      this.props.onClick && this.props.onClick(e);
    }
    render() {
      return ( 
          <button className={this.props.class} disabled={this.props.disabled}
             onClick={this.onClick.bind(this)}>
             <span><Icon color="#fff" size="20" name={`${'icon-'+this.props.icon}`} /></span> <span>{this.props.children}</span>
          </button>
      );
    }
}

Button.propTypes = {
  class:PropTypes.string,
  onClick:PropTypes.func
}
export default Button