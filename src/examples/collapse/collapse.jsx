import React,{Component} from 'react';
import Collapse from '../../components/Collapse';
import './collapse.less';
class collapse extends Component{
  render(){
    const activeName = "0";
    return(
      <div className="example-collapse">
      <h4>每次只能展示一个面板</h4>
      <Collapse value={activeName} accordion>
         <Collapse.Item title="反馈意见反馈意见反馈意见反馈意见反馈意见反馈意见反馈意见">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render </Collapse.Item>
         <Collapse.Item title="反馈意见">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render </Collapse.Item>
         <Collapse.Item title="history">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render </Collapse.Item>
      </Collapse>
      <h4>每次展开多个面板</h4>
      <Collapse>
         <Collapse.Item title="每次展开多个面板">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render </Collapse.Item>
         <Collapse.Item title="每次展开多个面板">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render </Collapse.Item>
         <Collapse.Item title="每次展开多个面板">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render </Collapse.Item>
      </Collapse>
      </div>
    );
  }
}


export default collapse;