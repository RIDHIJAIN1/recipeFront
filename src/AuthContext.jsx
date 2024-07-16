import axios from 'axios';
import React from 'react'
import { createContext , useContext , useState } from 'react';

const AuthContext =  createContext();

export const AuthProvider = ({children}) => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [user ,setUser ] = useState(null);
  const [loading , setLoading] = useState(false);
  const [ error , setError] = useState(null);
  
  const login = async(email , password)=>{
    setLoading(true);
    setError(null);

    try{
      const response = await axios.post(`${server}/users/login`,{
      email,password,
    })
      const {token,user} = response.data;
      localStorage.setItem('authtoken',token) 

      setUser(user);
      setIsLoggedIn(true);
    }
    catch(error){
      setError(error.response.data.message || 'Login failed')
    }
    finally{
      setLoading(false)
    }
  };

  const logOut = ()=>{
    
    localStorage.removeItem('authToken');
    setUser(null);
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{isLoggedIn,login,logOut,user , loading, error}}>
    {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

