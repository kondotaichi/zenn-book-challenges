// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter App 🧮</h1>
      <button onClick={() => console.log('clicked!🖱')}>
        +
      </button>
      <h3>{count} times clicked!🖱</h3>
    </div>
  );
}

export default App;