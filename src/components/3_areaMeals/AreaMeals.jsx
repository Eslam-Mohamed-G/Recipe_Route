import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dataContext } from '../Context/ContextAPIProvider';
import AOS from 'aos';

function AreaMeals() {
    const { mealsArea, loading, setID } = useContext(dataContext);
    const { area } =useParams();
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({once: false,});
    }, []);

    if (loading) {
        return (
            <div className='container'>
                <div role="status" className="loading-container">
                    <div className="loading-image">
                        <svg className="loading-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <div className="loading-text">
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    };
    
    return (
        <div className='areaMeals container'>
            <h1>{area} Meals</h1>
            <div className='row'>
                {mealsArea?.map((meals) => (
                    <div
                        className='card'
                        data-aos="zoom-in"
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
