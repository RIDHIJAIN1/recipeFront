import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
// import './css/main.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import loginStyle from './css/login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
  console.log(loginStyle);

const submitForm = (e) => {
  e.preventDefault();
}
  return (

   
   <div className={loginStyle.mycontainer}>
        <div className={loginStyle['login-container']}>
        <h2>Login</h2>
        <form action="/login" method="post"onSubmit={submitForm}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username"/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"/><br/>
            <div className="myButton">
            <button type="submit"className="btn btn-success success-button">Submit</button>
            </div>
        </form>
		<div className="logincontainer">
		<p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
	</div>
    </div>
    </div>
  
  )
}

export default Login
