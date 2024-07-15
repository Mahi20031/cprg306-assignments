"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import items from './items.json';

const Page = () => {
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
        setSelectedItemName(cleanedItemName);
    };

    return (
        <div style={{ display: 'flex' }}>
            <div>
                <NewItem />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <MealIdeas ingredient={selectedItemName} />
        </div>
    );
};

export default Page;