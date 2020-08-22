import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RollDice } from './components/roll-dice/roll-dice.component';

function App() {
  return (
    <div className="App">
      <RollDice numberOfDice='2' animationDuration='2000'/>
    </div>
  );
}

export default App;
