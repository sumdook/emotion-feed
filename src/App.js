import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Emotion from './components/emotion'
import CardComponent from './components/card'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Emotion />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
