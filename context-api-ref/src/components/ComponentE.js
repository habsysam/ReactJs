import React, { useContext, useEffect } from 'react';
import LoginContext from '../context-api/LoginContext';

function ComponentE() {
    let logInData=useContext(LoginContext)
    useEffect(()=>{
        console.log('logInData',logInData);
        // {isLogin:true
        // loggedInUser:'Guru'}

    },[])
  return( 
  <div>
      ComponentE-{logInData.loggedInUser}
  </div>
  )
}

export default ComponentE;
