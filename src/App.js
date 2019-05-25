import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './sass/style.scss';
import Navbar from "./component/layout/Navbar";
import Landing from "./component/layout/Landing";
import Dashboard from "./component/dashboard/Dashboard";
import Admin from "./component/admin/Admin";
import Client from "./component/client/Client";
import ClientProfile from "./component/clientProfile/ClientProfile";
import Footer from "./component/layout/Footer";
import Signup from "./component/signup/Signup";
import Signin from "./component/signin/Signin";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
          <header>
            <Route path="/" component={Navbar} />
          </header>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/client" component={Client} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/clientProfile" component={ClientProfile} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
