import React from 'react';
import './App.css';
import ListItems from "./components/ListItems";


function App() {
    const arr1 = [ 'red', 'green', 'blue', 'black', 'maroon', 'teal', 'dadadass' ];
    const arr2 = [ 'yellow', 'brown', 'purple', 'magenta'];
    return (
        <div>
            <h1>Hej!</h1>
            <p>Ala ma kota</p>
            <ul>
                <ListItems listItems={ arr1 } color={3} />
            </ul>
            <ul>
                <ListItems listItems={ arr2 } color={3} />
            </ul>
        </div>
    );
}

export default App;

