import React, { useState } from 'react'
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import App from './App'
import { createContext } from 'react'

export const server = "http://52.62.181.179:4000/api/v1"

export const Context = createContext({isAuthenticated:false});

export default Context;

const AppWrapper = ()=>{
  const  [isAuthenticated , setIsAuthenticated] = useState(false);
  const [loading ,setLoading] = useState(false);
  const [user ,setUser] = useState({});

  return(
    <Context.Provider value={{isAuthenticated , setIsAuthenticated , loading , setLoading,user,setUser}}>
    <App/>
    </Context.Provider>
  )
}

const root =createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>

);


