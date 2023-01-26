import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Diamond from './features/Diamond/Diamond';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Diamond></Diamond>
      </header>
    </div>
  );
}

export default App;
