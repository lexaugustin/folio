import React, { Component } from 'react';
import './App.css';
import { Settings } from './components/Settings';
//import { Jobs } from './components/Jobs';

class App extends Component {
  render() {
    return (
      <div className="App">
	<Settings/>
      </div>
    );
  }
}

export default App;
