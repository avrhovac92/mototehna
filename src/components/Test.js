import React, { Component } from 'react';
import { Icons, ListBrends } from 'assets';
import 'css/Test.css'


export default class Test extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
    render() {
     
        return (
          <div>
              <p>Test</p>
                <input id="input1" type="checkbox"/>
                <input id="input2" type="email"/>
                <input id="input3" type="image"/>
                <input id="input4" type="radio"/>
                <input id="input5" type="color"/>
                <input id="input6" type="date"/>
                <input id="input7" type="text"/>
                <input id="input8" type="datetime-local"/>
                <input id="input9" type="research"/>
                <input id="input10" type="password"/>
                <input id="input11" type="month"/>
                <input id="input12" type="hidden"/>
                <input id="input13" type="file"/>
                <input id="input13" type="number"/>
           
           
          </div>
        );
      }
    
 
    
    }