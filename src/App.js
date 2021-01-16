import React from 'react';
import './App.css';

function App() {
  const arr = ['red', 'green', 'blue', 'black', 'maroon', 'teal', 'dadadass'];

  return (
      <div>
        <h1>Hej!</h1>
        <p>Ala ma kota</p>
          <ul>
              {arr.map(color => (<li key={color}>{color}</li>))}
          </ul>
      </div>
  );
}

export default App;
