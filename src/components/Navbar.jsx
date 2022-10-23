import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <React.Fragment>
      <div
        id="firstNav"
        className="container-fluid"
        style={{
          height: "40px",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <a className="nav-item  text-uppercase" href="tel:+64225276078">
          <span className="fa fa-phone"></span>
        </a>
        <NavLink className="nav-item nav-link text-uppercase" to="/loginForm">
          Login
        </NavLink>
        <NavLink
          className="nav-item nav-link text-uppercase"
          to="/registerForm"
        >
          Register
        </NavLink>
      </div>
      <nav
        id="mainNav"
        className="navbar navbar-expand-lg navbar-light bg-light sticky-top nav-tab"
        role="tablist"
        style={{ paddingTop: "0px", paddingBottom: "0px" }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">
            <img
              src="./Images/logo/logo1.png"
              alt=""
              style={{ width: "30%" }}
            />
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
          <div
            className="collapse navbar-collapse nav nav-pills"
            id="navbarSupportedContent"
          >
            <NavLink className="nav-item nav-link text-uppercase" to="/home">
              Home
            </NavLink>
            <NavLink
              className="nav-item nav-link text-uppercase"
              to="#products"
            >
              Products
            </NavLink>
            <NavLink
              className="nav-item nav-link text-uppercase"
              to="/services"
            >
              Services
            </NavLink>
            <NavLink className="nav-item nav-link text-uppercase" to="/aboutUs">
              About Us
            </NavLink>
            <NavLink
              className="nav-item nav-link text-uppercase"
              to="/contactForm"
            >
              Contact
            </NavLink>
            <NavLink
              className="nav-item nav-link text-uppercase"
              aria-current="page"
              to="/displayJobs"
            >
              Jobs
            </NavLink>

            <NavLink
              className="nav-item nav-link text-uppercase"
              to="/customers"
            >
              Customers
            </NavLink>

            <NavLink
              className="nav-item nav-link text-uppercase"
              to="/contract"
            >
              Contracts
            </NavLink>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
