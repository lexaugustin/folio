import React, { Component } from 'react';

import Navbar from './Components/Navbar/Navbar'
import ProfileBar from './Components/ProfileBar/ProfileBar'

import BasicInfo from './Components/Accounts/BasicInfo/BasicInfo'
import About from './Components/Accounts/About/About'
import Files from './Components/Accounts/Files/Files'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="profile-bar"><ProfileBar/></div>
        <div id="navbar"><Navbar/></div>
        <div id="basic-info"><BasicInfo/></div>
        <div id="about"><About/></div>
        <div id="files"><Files/></div>
        {/* <div id="SignIn"><SignIn/></div> */}
        {/* <div id="SignIn"><SignUp/></div> */}
      </div>
    );
  }
}

export default App;
