import React from 'react';
import './App.css';

const ListItems = ({ listItems }) => listItems.map((color, index) => {
    const paddingLeft = (30 + (index * 20)).toString() + 'px';
    const style = { paddingLeft };
    return (
        <li key={ color } style={ { color } }>
            <span className='list-item' style={ style }> { color }</span>
        </li>
    )
});

function App() {
    const arr = [ 'red', 'green', 'blue', 'black', 'maroon', 'teal', 'dadadass' ];

    return (
        <div>
            <h1>Hej!</h1>
            <p>Ala ma kota</p>
            <ul>
                <ListItems listItems={ arr } color={3} />
            </ul>
        </div>
    );
}

export default App;
