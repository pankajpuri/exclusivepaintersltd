import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  state = {};

  render() {
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
              className="navbar-toggler tg"
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-uppercase"
                    activeClassName="active"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-uppercase" to="/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-uppercase" to="/services">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-uppercase" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-uppercase"
                    to="/contactForm"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-uppercase"
                    aria-current="page"
                    to="/displayJobs"
                  >
                    Jobs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-uppercase" to="/customers">
                    Customers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-uppercase" to="/contract">
                    Contracts
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
