import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dataContext } from '../Context/ContextAPIProvider';

function AreaMeals() {
    const { mealsArea, loading, setID } = useContext(dataContext);
    const { area } =useParams();
    const navigate = useNavigate();
    return (
        <div className='areaMeals container'>
            <h1>{area} Meals</h1>
            <div className='row'>
                {mealsArea?.map((meals) => (
                    <div
                        className='card'
                        key={meals.idMeal}
                        onClick={() => {
                            navigate(`/${area}/${meals.strMeal}/${meals.idMeal}`);
                            setID(meals.idMeal);
                        }}
                    >
                        <figure className='card-img-top' >
                            <img src={meals.strMealThumb} alt={meals.strMeal} />
                        </figure>
                        <div className='card-body'>
                            <p className='text-center'>{meals.strMeal.split(' ').slice(0, 4).join(' ')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AreaMeals;
