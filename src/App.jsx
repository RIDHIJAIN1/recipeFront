import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
// import '../src/styles/app.scss'
import Recipe from './Recipe.jsx'
import Single from './Single.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Admin from './Admin.jsx'

import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <Router>    
    <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/recipe'element={<Recipe/>}/>
    <Route path='/single'element={<Single/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/signup'element={<Signup/>}/>
    <Route path='/admin'element={<Admin/>}/>
    </Routes>
    <Toaster/>
  </Router>
  )
}

export default App
