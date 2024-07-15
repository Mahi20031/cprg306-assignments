"use client";

import React from 'react';

export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li onClick={() => onSelect(name)}>
            {name} - {quantity} ({category})
        </li>
    );
}