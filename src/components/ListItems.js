import React from "react";

const ListItems = ({ listItems }) => listItems.map((color, index) => {
    const paddingLeft = (30 + (index * 10)).toString() + 'px';
    const style = { paddingLeft };
    return (
        <li key={ color } style={ { color } }>
            <span className='list-item' style={ style }> { color }</span>
        </li>
    )
});

export default ListItems;