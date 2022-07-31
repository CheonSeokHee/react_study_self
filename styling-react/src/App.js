import React from 'react';
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON1</Button>
        <Button>BUTTON2</Button>
        <Button size="small">BUTTON3</Button>
      </div>
    </div>
  );
}

export default App;