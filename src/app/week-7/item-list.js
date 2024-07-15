import React from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
    const renderItems = () => {
        return items.map(item => (
            <Item 
                key={item.id} 
                item={item} 
                onSelect={onItemSelect} 
            />
        ));
    };

    return (
        <div>
            {renderItems()}
        </div>
    );
};

export default ItemList;