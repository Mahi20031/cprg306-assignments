"use client";

import React, { useEffect, useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

import { getItems, addItem } from "../_services/shopping-list-service";

function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const userId = "currentUserUID";

  useEffect(() => {
    if (userId) {
      getItems(userId)
        .then((fetchedItems) => setItems(fetchedItems))
        .catch((error) => console.error("Error fetching items:", error));
    }
  }, [userId]);

  const handleAddItem = (newItem) => {
    addItem(userId, newItem)
      .then((newItemId) => {
        const newItemWithId = { ...newItem, id: newItemId };
        setItems((prevItems) => [...prevItems, newItemWithId]);
      })
      .catch((error) => console.error("Error adding item:", error));
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.trim().toLowerCase();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="flex flex-col md:flex-row justify-around p-2">
      <div className="flex-1">
        <h1 className='font-bold text-4xl mb-4'>Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

export default Page;