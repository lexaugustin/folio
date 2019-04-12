import React, { Component } from 'react';

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';


// Components JS
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/LandingPage/LandingPage'
import Signin from './Components/Authentication/Signin'
import Signup from './Components/Authentication/Signup'

// Styles
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component = {LandingPage} />
          <Route exact path="/signin" component = {Signin} />
          <Route exact path="/signup" component = {Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
