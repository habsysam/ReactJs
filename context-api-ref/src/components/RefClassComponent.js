 import React,{Component} from "react";

export class RefClassComponent extends Component{
     constructor(props){
         super(props)
         this.iRef=React.createRef()
         this.pRef=React.createRef()
     }
 componentDidMount(){
         console.log(this.iRef);
         this.iRef.current.focus()
     }
     
  render(){
    return(
        <div>
            <input ref={this.iRef} type="text" placeholder='enter email' />
            <input ref={this.pRef} type='password' placeholder="Enter password" />
            <button onClick={()=>{
                 this.pRef.current.focus()
            }}>Login</button>
        </div>
    )
}
}
export default RefClassComponent