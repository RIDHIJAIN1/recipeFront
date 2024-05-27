import React, { useContext, useState } from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
// import './css/main.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import loginStyle from './css/login.module.css'
import { Link , Navigate} from 'react-router-dom'
import Context, { server } from './main'
import toast from 'react-hot-toast'
import axios from 'axios'

const Login = () => {
  // console.log(loginStyle);

  const {isAuthenticated , setIsAuthenticated ,loading, setLoading} = useContext(Context)
  const [email,setEmail ] = useState('');
const [password,setPassword ] = useState('');
  if(isAuthenticated) return <Navigate to = {"/"} />

  const submitHandler = async(e) => {
    e.preventDefault();
    setLoading(true);
   
  try{
    const {data}=await axios.post(`${server}/users/login`,{
      email,password,
    },
    {
      headers: {
        "Content-Type" : "application/json"
      },
      withCredentials : true,
    }
    );
    setIsAuthenticated(true)
  
    toast.success(data.message);
    setLoading(false);
   
  }catch(error){
    
    toast.error("Some Error")
    console.log(error)
    setIsAuthenticated(false)
  }
  }
  
  // if(isAuthenticated) return <Navigate to = {"/"} />
  return (

   
   <div className={loginStyle.mycontainer}>
        <div className={loginStyle['login-container']}>
        <h2>Login</h2>
        <form action="/login" method="post"onSubmit={submitHandler}>
        <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"value={email}onChange={(e)=>setEmail(e.target.value)}required/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"value={password}onChange={(e)=>setPassword(e.target.value)}required/>
            <div className="myButton">
            <button disabled={loading} type="submit"className="btn btn-success success-button">Submit</button>
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
