import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo-resize.png'
class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      style: "nav-link"
    }
  }
  render() {
    console.log(this.props.location.pathname)
    return (
      <nav className="menu">
        <Link className="menu-branding" to="/">
          <img src={Logo} alt = "logo" />
        </Link>
        <ul className="menu-nav">
            <li className="nav-item">
              <Link to="/" className={this.props.location.pathname === "/" ? `${this.state.style} active` : this.state.style}>Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className={this.props.location.pathname === "/signup" ? `${this.state.style} active` : this.state.style}>Inscription</Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className={this.props.location.pathname === "/signin" ? `${this.state.style} active` : this.state.style}>Connexion</Link>
            </li>
            <li className="nav-item">
              <Link className={this.props.location.pathname === "/admin" ? `${this.state.style} active` : this.state.style} to="/admin">Admin</Link>
            </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
