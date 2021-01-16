import React from 'react';
import './App.css';

const listItemMapper = (color, index) =>
    (
        <li key={color} style={{color: color}}>
                           <span className='list-item'
                                 style={{paddingLeft: (30 + (index * 20)).toString() + 'px'}}> {color}
                           </span>
        </li>
    );


function ListItems(props) {
    const listItems = props.listItems;
    return listItems.map(listItemMapper)
}

function App() {
    const arr = ['red', 'green', 'blue', 'black', 'maroon', 'teal', 'dadadass'];
    return (
        <div>
            <h1>Hej!</h1>
            <p>Ala ma kota</p>
            <ul>
                <ListItems listItems={arr}/>
            </ul>
        </div>
    );
}

export default App;
