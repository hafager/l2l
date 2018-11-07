import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Mer info om <code>Leilighet 2 Leilighet</code> kommer snart.
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
