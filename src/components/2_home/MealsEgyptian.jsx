import React, { useState, useEffect } from 'react';
import axios from "axios";

function MealsEgyptian() {
    // Filter meals by Area
    const [mealsEgyptian, setMealsEgyptian] = useState([]);
    const fetchAreaMeals = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian');
            setMealsEgyptian( response?.data?.meals );
        } catch (error) {
            console.error('Meals Egyptian Copmonent:', error);
        }
    };

    useEffect(() => {
        fetchAreaMeals();
    }, []);

    return (
        <div className='container mealsEgyptian'>
            <h1>some egyptian meals</h1>
            <div className='row'>
                {mealsEgyptian ? mealsEgyptian?.map((meal) => (
                    <div className='card' key={meal.idMeal}>
                        <figure className='card-img-top' >
                            <img src={meal.strMealThumb} alt={meal.strMeal}/>
                        </figure>
                        <div className='card-body'>
                            <p className='text-center'>{meal.strMeal}</p>
                        </div>
                    </div>
                )) : <div>lodaing</div>}
            </div>
        </div>
    )
}

export default MealsEgyptian;
