import React from "react";
import "../../src/css/Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { MdDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaBowlFood } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

const Siderbar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Admin Panel</h3>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to ="/">
              <IoIosHome  className="sidebar-icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to ="/adminpanel">
              <MdDashboard className="sidebar-icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
           <Link to = "/users">
              <FiUsers className="sidebar-icon" />
              <span>Users</span>
              </Link>
          </li>
          <li>
           <Link to = "/allrecipes">
              <FaBowlFood className="sidebar-icon" />
              <span>Recipes</span>
              </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <CiHeart className="sidebar-icon" />
              <span>Favourites</span>
            </Link>
          </li>
          <li>
            <Link to = "/login">
              <CiLogout className="sidebar-icon" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Siderbar;
