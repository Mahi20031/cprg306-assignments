import React from 'react';

const ItemList = ({ items }) => {

    const renderItems = () => {
        return items.map(item => (
            <div key={item.id}>
                <span>{item.name}</span>
                <span>{item.quantity}</span>
                <span>{item.category}</span>
            </div>
        ));
    };

    return (
        <div>
            {renderItems()}
        </div>
    );
};

export default ItemList;