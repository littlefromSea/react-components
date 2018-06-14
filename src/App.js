import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Index from './examples/index';
import Button from './examples/button/button';
import Collapse from './examples/collapse/collapse';
import Icon from './examples/icon/icon';
import Message from './examples/message/message';
import Input from './examples/input/input';
import Switch from './examples/switch/switch'

class App extends Component {
    render() {
        return ( 
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Index}/>
              <Route path="/button" component={Button}/>
              <Route path="/collapse" component={Collapse}></Route>
              <Route path="/icon" component={Icon}></Route>
              <Route path="/message" component={Message}></Route>
              <Route path="/input" component={Input}></Route>
              <Route path="/switch" component={Switch}></Route>
            </div>
         </BrowserRouter>
        );
    }
}

export default App;