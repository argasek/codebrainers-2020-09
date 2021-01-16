import React from 'react';
import './App.css';

function App() {
    const arr = ['red', 'green', 'blue', 'black', 'maroon', 'teal', 'dadadass'];

    return (
        <div>
            <h1>Hej!</h1>
            <p>Ala ma kota</p>
            <ul>
                {arr.map((color, index) =>
                    (
                        <li key={color} style={{color: color}}>
                           <span className='list-item' style ={{paddingLeft: (30+(index*20)).toString()+'px'}}> {color}</span>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default App;
