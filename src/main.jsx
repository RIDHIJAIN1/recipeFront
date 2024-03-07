import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/styles/app.scss'
import Recipe from './Recipe.jsx'
import Single from './Single.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
