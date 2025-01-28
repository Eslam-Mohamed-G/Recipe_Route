import React, { useContext } from 'react';
import { dataContext } from '../Context/ContextAPIProvider';

function AreaMeals() {
    const { mealsArea, loading } = useContext(dataContext);
    return (
        <div className='areaMeals container'>
            <div className='row'>
                {mealsArea?.map((meals) => (
                    // <div className='container'></div>
                        <div className='card' key={meals.idMeal}>
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
