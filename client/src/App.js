import React, { Component } from 'react';
// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import store from './store';

import jwt_decode from 'jwt-decode';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser, signOutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';


// Components
import Signin from './Components/Authentication/Signin'
import Signup from './Components/Authentication/Signup'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import LandingPage from './Components/LandingPage/LandingPage'
import UserProfile from './Components/UserProfile/UserProfile'


// Styles
import './App.css';

// Check if the token exists
if(localStorage.jwtToken) {
  // Set authorization token header
  setAuthorizationToken(localStorage.jwtToken);

  // Decode the token info and get the current user info and expiration time
  const decoded = jwt_decode(localStorage.jwtToken);

  // Set the current user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check if the token has expired
  const currentTime = Date.now()

  // Check if the expiration time is greater than the current time
  // to logout the user
  if(decoded.exp < currentTime) {
    store.dispatch(signOutUser(decoded));
  }

  // Clear the current Profile
  store.dispatch(clearCurrentProfile());

  // Redirect the Sign-in page
  window.location.href='/signin';
}


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Router>
          <div className="App">
            <Navbar/>
            <Route exact path="/" component = {LandingPage} />
            <Route exact path="/signin" component = {Signin} />
            <Route exact path="/signup" component = {Signup} />
            <Route exact path="/userprofile" component = {UserProfile} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
