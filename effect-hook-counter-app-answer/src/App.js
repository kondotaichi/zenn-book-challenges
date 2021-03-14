import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} times clicked!`;
  }, [count]);

  return (
    <div className="App">
      <h1>Counter App 🧮</h1>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
      <h3>{count} times clicked!🖱</h3>
    </div>
  );
}

export default App;