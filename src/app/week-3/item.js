import React from 'react';

const item = ({name, quantity, category}) => {
    return(
        <li>
            <span>{name}</span>
            <span>{quantity}</span>
            <span>{category}</span>
        </li>
    )
}
export default item;