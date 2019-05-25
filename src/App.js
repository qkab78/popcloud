import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';

import store from './redux/store';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser} from './redux/actions/auth-actions'
import Navbar from "./component/layout/Navbar";
import Landing from "./component/layout/Landing";
import Dashboard from "./component/dashboard/Dashboard";
import Admin from "./component/admin/Admin";
import Client from "./component/client/Client";
import ClientProfile from "./component/clientProfile/ClientProfile";
import Footer from "./component/layout/Footer";
import Signup from "./component/signup/Signup";
import Signin from "./component/signin/Signin";
import './sass/style.scss';

if (localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser);
    //Redirect to /login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
