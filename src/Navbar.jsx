import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
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
            <li className="nav-item">
              <Link className="nav-link" to="/login">LOGIN</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">ADMIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
