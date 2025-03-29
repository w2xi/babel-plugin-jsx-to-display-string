import React, { useState } from 'react';

interface User {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
}

const App: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: 'John Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York'
    }
  });

  const myArray = [1, 2, 3, 4, 5];
  const myMap = new Map([['key1', 'value1'], ['key2', 'value2']]);
  const mySet = new Set([1, 2, 3, 4, 5]);
  const mySymbol = Symbol('symbolDescription');
  
  return (
    <div className="App">
      <h1>React toDisplayString Demo</h1>
      
      <h2>String:</h2>
      <div>{user.name}</div>
      
      <h2>Number:</h2>
      <div>{user.age}</div>
      
      <h2>Object:</h2>
      <div>{user}</div>
      <div>{user.address}</div>
      
      <h2>Array:</h2>
      <div>{myArray}</div>
      
      <h2>Map:</h2>
      <div>{myMap}</div>
      
      <h2>Set:</h2>
      <div>{mySet}</div>
      
      <h2>Symbol:</h2>
      <div>{mySymbol}</div>
      
      <h2>Expression:</h2>
      <div>{user.age > 25 ? 'Adult' : 'Young'}</div>
      
      <h2>Function:</h2>
      <div>{() => 'Function result'}</div>
    </div>
  );
};

export default App; 