import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './switch.less';

class Switch extends Component{
  constructor(props){
     super(props);
     this.state = {
       value:props.value,
     }
  }
  handleChange(e) {
      this.setState({
        value: e.target.checked ? this.props.onValue : this.props.offValue
      }, () => {
        //this.updateSwitch();
        if (this.props.onChange) {
          this.props.onChange(this.state.value);
        }
      });
  }
  handleFocus(e) {
      if (this.props.allowFocus) {
        this.props.onFocus(e);
      }
  }
  handleBlur(e){
    if(this.props.allowFocus){
      this.props.onBlur(e);
    }
  }
   render(){
     const {value} = this.props;
     return(
        <label>
            <input 
              className="rc-switch rc-switch-anim" 
              type="checkbox" 
              ref="input"
              onChange={this.handleChange.bind(this)}
              onFocus={this.handleFocus.bind(this)}
              onBlur={this.handleBlur.bind(this)}
              checked={value}
            />
        </label>
     )
   }
}

Switch.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onColor:PropTypes.string,
  offColor:PropTypes.string,
  value:PropTypes.bool,
}

Switch.defaultProps = {
  allowFocus:false,
  value:false
}
export default Switch;