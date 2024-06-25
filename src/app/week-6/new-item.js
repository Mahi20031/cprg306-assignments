const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
};

import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: generateId(),
            name,
            quantity,
            category,
        };
        onAddItem(newItem);
        setName('');
        setQuantity('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default NewItem;