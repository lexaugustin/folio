import React, { Component } from 'react';

import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'

import BasicInfo from './Components/Accounts/BasicInfo/BasicInfo'
import Files from './Components/Accounts/Files/Files'

// A B O U T
import Title from './Components/Accounts/About/SectionTitle/SectionTitle'
import Education from './Components/Accounts/About/Education/Education'
import Experience from './Components/Accounts/About/Experience/Experience'


// import SignIn from './Components/SignIn/SignIn'
// import SignUp from './Components/SignUp/SignUp'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="navbar"><Navbar/></div>
        <div id="sidebar"><Sidebar/></div>
        <div id="basic-info"><BasicInfo/></div>
        <div id="files"><Files/></div>
        
        {/* A B O U T */}
        <div id="education">
          <div id="section-content">
            <Title title="Education"/>
            <Education/>
          </div>
        </div>
        
        <div id="experience">
          <div id="section-content">
            <Title title="Experience"/>
            <Experience/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
