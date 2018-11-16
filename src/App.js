import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import turkart from './tequilamap.png'
import Countdown from 'react-countdown-now'

const Completionist = () => <span>Arriba! Tequila y Nachos Por favor!</span>;

class App extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Countdown date={new Date('2018-11-17T14:00:00')}>
              <Completionist />
            </Countdown>
          </p>
          <p>
            Dette er et BYOB arrangement.
            Det vil bli innført ledertrøye, klatretrøye og edrutrøye.
            Disse vil bli utstedt ved slutten av hver etappe.

            Følgende regler gjelder for arrangementet L2L.
            Brudd på reglementet straffes med straffeshots:
            <ol>
             <li>Ingen ølsøling</li>
             <li>Ingen forsentkomming. (Den kommende verten er ansvarlig for å få samtlige i hus innen tidsrammene)</li>
             <li>Signifikant mengde gjenværende øl i boksen ved avgang til ny leilighet</li>
             <li>Ingen oppkast i vask. 1 straffeshot.</li>
             <li> Hektor skal respekteres.</li>
            </ol>
          </p>
          <p>
            <img src={turkart} className="App-map" alt="map" />
          </p>

        </header>
      </div>
    );
  }
}

export default App;
