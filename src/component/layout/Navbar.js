import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png'
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar flex flex-center bg-dark">
        <div className="content flex flex-center flex-space-between">
          <div className="navbar-brand">
            <Link className="navbar-brand" to="/">
              {/* <img src={Logo} alt="logo" /> */}Popcloud
            </Link>
          </div>
          <div className="nav-link">
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="nav-link">
            <Link to="/admin">Admin</Link>
          </div></div>
      </nav>
    );
  }
}

export default Navbar;
