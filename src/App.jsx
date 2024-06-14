import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <div>Navbar</div>
        <div>Filter Data By</div>
        <div>Recent Data</div>
        <div>
          Inventory Chart
        </div>
        <div>Avg MSRP Chart</div>
        <div>History Log</div>
      </div>
    </div>
  );
}

export default App;
