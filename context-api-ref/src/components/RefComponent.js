import React,{ useEffect,useRef} from "react";

function RefComponent(){
    const inputRef = useRef('hello')
    const passwordRef = useRef()
    useEffect(()=>{
        console.log('inputRef',inputRef);
        console.log('inputRef',inputRef.current);
        inputRef.current.focus()
    },[])
    return(
        <div>
            <input ref={inputRef} type="text" placeholder='enter email' />
            <input ref={passwordRef} type='password' placeholder="Enter password" />
            <button onClick={()=>{
                passwordRef.current.focus()
            }}>Login</button>
        </div>
    )
}
export default RefComponent