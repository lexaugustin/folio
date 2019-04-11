import React, { Component } from 'react';

// Router
// import { BrowserRouter as Router, Route } from 'react-router-dom';


// Components JS
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/LandingPage/LandingPage'

// Styles
import './App.css';

class App extends Component {
  render() {
    return (
      // <Router>
        <div className="App">
          <Navbar/>
          <LandingPage/>
        </div>
      // </Router>
    );
  }
}

export default App;
