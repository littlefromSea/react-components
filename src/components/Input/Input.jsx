import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './input.less';

class Input extends Component{
  static defaultProps = {
      type: 'text',
      rows:2,
     // autoSize:false
  }
  handleChange(e){
    const { onChange } = this.props;

    if (onChange) {
      onChange(e.target.value);
    }
  }
  handleFocus(e){
    const { onFocus } = this.props;
    if (onFocus) onFocus(e)
  }
  handleBlur(e){
    const { onBlur } = this.props;
    if (onBlur) onBlur(e)
  }
  render(){
    const {type, disabled, placeholder, autofocus, maxlength, rows, autoSize, size
      //...otherProps
    } = this.props;
    
    const classname_input =classnames(size && `rc-input--${size}`, {
       "rc-input":true,
       "is-disabled":disabled,
    });
   
    const className_textarea = classnames({
      "rc-textarea_inner":true,
      "rc-autoSize":autoSize,
    });

    if(type === "textarea") {
      return(
        <div className="rc-textarea">
          <textarea 
            className={className_textarea}
            placeholder={placeholder} 
            autoFocus={autofocus}
            rows={rows} 
            maxLength={maxlength}
            onChange={this.handleChange.bind(this)}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
          >
          </textarea>
        </div>
      )
    } else { 
      return(
        <div className={classname_input}>
           <input 
             className="rc-input_inner" 
             disabled={disabled} 
             type={type} 
             placeholder={placeholder} 
             autoComplete="off"
             onChange={this.handleChange.bind(this)}
             onFocus={this.handleFocus.bind(this)}
             onBlur={this.handleBlur.bind(this)}
             />
        </div>
      )
    }  
  }
}

Input.propTypes = {
  placeholder:PropTypes.string,
  disabled:PropTypes.bool,
  type:PropTypes.string,
  autoFocus:PropTypes.bool,
  maxLength:PropTypes.number,
  rows:PropTypes.number,
  onChange:PropTypes.func,
  onFucos:PropTypes.func,
  onBlur:PropTypes.func,
  size: PropTypes.oneOf(['large', 'small', 'mini']),
}

export default Input;