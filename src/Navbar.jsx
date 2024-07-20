import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context, server } from './main';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaRegHeart } from 'react-icons/fa';
import { MdPostAdd } from "react-icons/md";

const Navbar = () => {

  const logOutHandler = async(e) => {
    e.preventDefault();
   setLoading(true)
  try{
    // await axios.get(`${server}/users/logout`,{
    //   withCredentials : true,  
    // }
    // );
    localStorage.removeItem('authToken');
    toast.success("Logged out successfully");
    setIsAuthenticated(false);
    setLoading(false);
   
  }catch(error){
    
    toast.error("Some Error");
    console.log(error);
    setIsAuthenticated(true);
    setLoading(false);
  }
  }

  const {isAuthenticated ,setIsAuthenticated , loading,setLoading}= useContext(Context);

  // console.log(isAuthenticated);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-tranparent">
      <div className="container">
        <Link className="navbar-brand " to="/">FlavourFusion</Link> {/* Add mr-auto class to move brand to the left */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipe">RECIPE</Link>
            </li>

            {             
              isAuthenticated ?  (<button onClick={logOutHandler}className='nav-link'disabled={loading}>LOGOUT</button>):( <li className="nav-item">
              <Link className="nav-link" to="/login">LOGIN</Link>
            </li>)
            }
           
            <li className="nav-item">
              <Link className="nav-link" to="/admin">ADD<MdPostAdd/></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wishlist"> <FaRegHeart/></Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link" to="/adminpanel">ADMIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
