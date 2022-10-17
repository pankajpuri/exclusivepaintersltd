import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          <img src="./Images/logo/logo1.png" alt="" style={{ width: "30%" }} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavLink
            className="nav-item nav-link"
            aria-current="page"
            to="/displayJobs"
          >
            Jobs
          </NavLink>

          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>

          <NavLink className="nav-item nav-link" to="/contract">
            Contracts
          </NavLink>
          <NavLink className="nav-item nav-link" to="/loginForm">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="/registerForm">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
