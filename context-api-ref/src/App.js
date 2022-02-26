import React, { useState } from 'react';
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentD from './components/ComponentD';
import ComponentF from './components/ComponentF';
import ComponentG from './components/ComponentG';
import { DataProvider } from './context-api/DataContext';
import { LoginProvider } from './context-api/LoginContext';
import RefComponent from './components/RefComponent';
import {UserProvider} from './context-api/UserContext'
import RefClassComponent from './components/RefClassComponent';
function App() {
  const[username,setusername]=useState('Ajit')
  const[loginData,setloginData]=useState({
    isLogin:true,
    loggedInUser:'Guru'
  })
  let myData='111'
  return <div className='App'>
    Context API
    <button onClick={()=>{
      setusername('Jalaj')
    }}>Update Username</button>
    <UserProvider value={username}>
      {/* <ComponentA username={username}/> */}
      <ComponentA/>
      <ComponentG/>
    </UserProvider>
    <LoginProvider value={loginData}>
      <ComponentD/>
    </LoginProvider>
    <DataProvider value={myData}>
      <ComponentF/>
      <RefComponent/>
      <RefClassComponent/>
    </DataProvider>
    
    <button onClick={()=>{
      myData='222'
      console.log(myData)
    
    }}>Update Data</button>
     
  </div>;
}

export default App;
