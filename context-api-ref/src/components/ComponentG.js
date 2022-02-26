import React, { Component } from 'react';
import UserContext, { UserConsumer } from '../context-api/UserContext';

export default class ComponentG extends Component {
    static contextType=UserContext//used to access the context apart from userconsumer anywhere
    compnentDidMount(){
        console.log(this);
        console.log('context',this.context);
    }
  render() {
      return (
          <div>
              <UserConsumer>
                  {
                      (contextData)=>{
                          return <p>ComponentG-{contextData}</p>
                      }
                  }
              </UserConsumer>
              <p>Name-{this.context}</p>
          </div>
      )
  }
}
