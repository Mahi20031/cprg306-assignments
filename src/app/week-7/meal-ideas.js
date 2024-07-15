"use client";
import React, { useEffect, useState } from 'react';

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const loadMealIdeas = async () => {
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        };

        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
};

export default MealIdeas;