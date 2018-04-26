import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <Header />
        <Body />
      </div>;
  }
}

export default App;
