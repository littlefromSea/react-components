import React from 'react';
import ReactDOM from 'react-dom';
import './message.less';
import Icon from '../Icon';
//import Toast from './Toast';

export default function Message(props){
    const doc = window.document;
    const node = doc.createElement('div');
    doc.body.appendChild(node);
    // const component = React.createElement(Toast, Object.assign(props, {
    //   willUnmount: () => {
    //         ReactDOM.unmountComponentAtNode(node);
    //         document.body.removeChild(node);
      
    //         if (props.onClose instanceof Function) {
    //           props.onClose();
    //         }
    //   }
    // }));
    // console.log(component);
    var iconMessage = {
      "error":'closecircleo',
      "success":"checkcircleo",
      "primary":'exclamationcircle',
      "warning":"exclamationcircle",
    }
    ReactDOM.render(
        <div  className={'rc-message rc-message-top'}>
           <span className={`rc-icon rc-icon-${props.type}`}><Icon color="#fff" name={'icon-'+iconMessage[props.type]} /></span>
           {props.message}
        </div>
        ,
       node);
  setTimeout(()=>{
    document.body.removeChild(node);
  },1500);
}
