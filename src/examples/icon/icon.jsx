import React, { Component } from 'react';
import Clipboard from 'clipboard';
import Icon from '../../components/Icon';
import iconJson from './iconJson.json';
import Message from '../../components/Message';
import './icon.less';

class icon extends Component{
  copyIconName(iconName){
      let clipboard = new Clipboard('.rc-icon-iconFont');
      clipboard.on('success', () => {
        Message({
          message:iconName + ' 已经复制',
          type:'success'
        });
        clipboard.destroy();
      });

      clipboard.on('error', () => {
        Message({
          message:'该浏览器不支持复制',
          type:'error'
        });
        clipboard.destroy();
      });
  }
  render(){
    var iconElement = [];
    for(var i=0;i<iconJson.icon.length;i++){
        iconElement.push(
          <div className="rc-icon-iconFont" data-clipboard-text={iconJson.icon[i]} key={i} onClick={this.copyIconName.bind(this,iconJson.icon[i])}>
            <span>
              <Icon size="22" name={`${'icon-'}${iconJson.icon[i]}`}/>
            </span>
            <span>{iconJson.icon[i]}</span>
          </div>
        );
    }
    return(
      <div className="rc-icon">
        {iconElement}
      </div>
      
    )
  }
}

export default icon;