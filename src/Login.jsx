import React from 'react'
// import  'bootstrap/dist/css/bootstrap.min.css'
// import './css/main.css'
// import 'bootstrap/dist/js/bootstrap.bundle'

// import './css/login.css'

const Login = () => {
  return (
   <div>
        <div className="container">
        <h2>Login</h2>
        <form action="/login" method="post">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username"/><br/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"/><br/>
            <input type="submit" value="Submit"/>
        </form>
		<div className="login-container">
		<p>Don't have an account? <a href="/signup.html">Sign Up</a></p>
	</div>
    </div>
    </div>
  
  )
}

export default Login
