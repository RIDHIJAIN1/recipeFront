import React, { useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
// import '../src/styles/app.scss'
import Recipe from './Recipe.jsx'
import Single from './Single.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Admin from './Admin.jsx'

import { Toaster } from 'react-hot-toast'
import Footer from './Footer.jsx'
import axios from 'axios'
import Context, { server } from './main.jsx'
import { useContext } from 'react'


const App = () => {

  const{setUser , setIsAuthenticated , setLoading} = useContext(Context)

  useEffect(()=>{
    setLoading(true);

    axios.get(`${server}/users/me`,{
      withCredentials:true,
    }).then(res=>{
      setUser(res.data.user);
      setIsAuthenticated(true);
      setLoading(false);

    }).catch((error)=>{
       setUser({})
       setIsAuthenticated(false);
       setLoading(false);
    })
    
    },[3000]);

  return (
    <Router> 
         
    <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/recipe'element={<Recipe/>}/>
    {/* <Route path='/single'element={<Single/>}/> */}
    <Route path='/login'element={<Login/>}/>
    <Route path='/signup'element={<Signup/>}/>
    <Route path='/admin'element={<Admin/>}/>
    <Route path='/footer'element={<Footer/>}/>
    <Route path="/recipe/:id" element={<Single/>} />

    
    </Routes>
    <Toaster/>
  </Router>
  )
}

export default App
