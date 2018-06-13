import React,{Component} from 'react';
import './collapseItem.less';
import Icon from './../Icon';


class collapseItem extends Component{
    constructor(props){
      super(props);
      this.state = ({
        activeName:false
      });
    }
    render(){
      const {title,onClick, name,isActive } = this.props;
      return(
        <div className="rc-collapse">
          <div className="rc-collapse-header" onClick={() => onClick(name)}>
             <span>{title}</span>
             <span className={`${isActive?'arrow_rotate':''}`}><Icon size="20" name="icon-right" /></span>
          </div>
          <div className={`${'rc-collapse-content'} ${ isActive?'rc-display':''}`}>
              {this.props.children}
          </div>
        </div>
      );
    }
}

export default collapseItem;