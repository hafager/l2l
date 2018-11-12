import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import turkart from './tequilamap.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <img src={turkart} className="App-map" alt="map" />
          </p>
          <p>
            Det blir:
          </p>
          <a
            className="App-link"
            href="https://ikkepedia.org/wiki/Fylla"
            target="_blank"
            rel="noopener noreferrer"
          >
            fylla
          </a>
        </header>
      </div>
    );
  }
}

export default App;
