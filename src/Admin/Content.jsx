import React, { useEffect, useState } from "react";
import "../../src/css/Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { MdDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaBowlFood } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";
import Siderbar from "./Sidebar";
import axios from "axios";
import { server } from "../main";

const Content = () => {
  const [userCount , setUserCount] = useState(null);
  const [recipeCount , setRecipeCount] = useState(null);

  useEffect(()=>{
    const fetchUserCount= async(req , res)=>{
      try{
        const res = await axios.get(`${server}/users/usercount`)
        setUserCount(res.data.usersCount);
        setRecipeCount(res.data.recipeCount)
      }
      catch(error){
        console.log("Error fetching recipe data",error);
      }
    };
    // const fetchRecipeCount= async(req , res)=>{
    //   try{
    //     const res = await axios.get(`${server}/recipe/recipeCount`);
    //     console.log(res.data);
    //     setRecipeCount(res.data.recipeCount);
    //   }
    //   catch(error){
    //     console.log("Error fetching recipe data",error);
    //   }
    // };

    fetchUserCount();
    // fetchRecipeCount();
  },[]);


  return (
    <div>
     <Siderbar/>
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="e-card playing">
                <div className="image"></div>

                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
               
                <div className="infotop">
                  <div> <FiUsers className="card-icon" /></div>
                  TOTAL USERS
                  <div className="name">{userCount}</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="e-card playing">
                <div className="image"></div>

                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>

                <div className="infotop">
                <div> <FaBowlFood className="card-icon" /></div>
                  TOTAL RECIPES
                  <div className="name">{recipeCount}</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="e-card playing">
                <div className="image"></div>

                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>

                <div className="infotop">
                <div> <CiViewBoard className="card-icon" /></div>
                  DAILY USERS
                  <div className="name">100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
