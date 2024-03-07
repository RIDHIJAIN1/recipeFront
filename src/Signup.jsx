import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './css/signup.css'
const Signup = () => {
  return (
    <div>
      <div className="container">
        <h2>Signup</h2>
        <form action="/signup" method="post">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username"/><br/>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"/><br/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"/><br/>
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input type="password" id="confirm_password" name="confirm_password"/><br/>
          <input type="submit" value="Submit"/>
        </form>
        <div className="signup-container">
          <p>Already have an account? <a href="/Login.html">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
