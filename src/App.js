import React from 'react';
import './App.css';

function App() {
    const arr = ['red', 'green', 'blue', 'black', 'maroon', 'teal', 'dadadass'];

    return (
        <div>
            <h1>Hej!</h1>
            <p>Ala ma kota</p>
            <ul>
                {arr.map(color =>
                    (
                        <li key={color} style={{color: color}}>
                           <span style ={{paddingLeft:'30px', paddingRight:'30px', backgroundColor:'#ccc'}}> {color}</span>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default App;
