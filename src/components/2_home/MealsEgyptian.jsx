import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { dataContext } from '../Context/ContextAPIProvider';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';

function MealsEgyptian() {
    const { setID } = useContext(dataContext);
    const navigate = useNavigate();
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
        AOS.init({once: false,});
    }, []);

    return (
        <div className='container mealsEgyptian'>
            <h1>some egyptian meals</h1>
            <div className='row'>
                {mealsEgyptian ? mealsEgyptian?.map((meal) => (
                    <div data-aos="zoom-in" className='card' key={meal.idMeal} onClick={() => { setID(meal.idMeal); navigate(`/Egyptian/${meal.strMeal}/${meal.idMeal}`) }}>
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
