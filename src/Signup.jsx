import React, { useState } from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import toast from "react-hot-toast";
import axios from "axios";
// import './css/main.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './css/signup.css'
import { Link } from 'react-router-dom';
import { server } from './main';




const Signup = () => {

const [name,setName ] = useState('');
const [email,setEmail ] = useState('');
const [password,setPassword ] = useState('');
const [confirmPassword,setConfirmPassword ] = useState('');



const submitHandler = async(e) => {
  e.preventDefault();
  console.log(name,email,password);

  if (password !== confirmPassword){
    toast.error("Passwords and confirmPassword does not match")
    return;
  }
 
try{
  const {data}=await axios.post(`${server}/users/new`,{
    name,email,password,
  },
  {
    headers: {
      "Content-Type" : "application/json"
    },
    withCredentials : true,
  }
  );
  
  toast.success(data.message)

  setTimeout(()=>{
    window.location.href = "/";
  },2000)
 
}catch(error){
  
  toast.error("Some Error")
  console.log(error)
}
}

  return (
    <div> 
      <div className="signup-container">
        <h2>Signup</h2>
        <form action="/signup" method="post"onSubmit={submitHandler}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username"value={name} onChange={(e)=>setName(e.target.value)}required/>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"value={email}onChange={(e)=>setEmail(e.target.value)}required/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"value={password}onChange={(e)=>setPassword(e.target.value)}required/>
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input type="password" id="confirm_password" name="confirm_password"value={confirmPassword}onChange={(e)=>setConfirmPassword(e.target.value)}required/>

          <button type="submit" className="btn btn-success success-button">Submit</button>
        </form>
        <div className="signup-containers">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
