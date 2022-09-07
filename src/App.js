import logo from './logo.svg';
import React from 'react';
import './App.css';
import SongContainer from './containers/SongContainer';

function App() {
  return (
    <div className="App">
      <h1>Songs</h1>
      <SongContainer/>
    </div>
  );
}

export default App;
