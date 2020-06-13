import React, { useState } from 'react';
import Hello from './sayHello';
import Tweet from './Tweet';

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello React</h1>
      <Tweet />
      <button onClick={increment}>Level Up</button>
      <h3>{count}</h3>
    </div>
  );
}

export default App;