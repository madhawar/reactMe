import React, { useState } from 'react';
import Hello from './sayHello';
import Tweet from './Tweet';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const [users, setUser] = useState ([
    {name: "John", message: "I'm a boy"},
    {name: "Jane", message: "I'm a girl"},
    {name: "Jar", message: "I'm an alien"}
  ]);

  return (
    <div>
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}

      <h1>Hello React</h1>
      
      <button onClick={increment}>Level Up</button>
      <h3>{count}</h3>
    </div>
  );
}

export default App;