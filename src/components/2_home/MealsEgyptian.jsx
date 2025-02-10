import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { dataContext } from '../Context/ContextAPIProvider';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';

function MealsEgyptian() {
    const { setID } = useContext(dataContext);
    const navigate = useNavigate();
    // Filter meals by Area
    const [loading, setLoading] = useState(false);
    const [errorMSG, setErrorMSG] = useState("");
    const [mealsEgyptian, setMealsEgyptian] = useState([]);
    const fetchAreaMeals = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian');
            setMealsEgyptian( response?.data?.meals );
        } catch (error) {
            setErrorMSG(error.message)
        } finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAreaMeals();
        AOS.init({once: false,});
    }, []);

    return (
        <div className='mealsEgyptian'>
            {loading &&
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
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            }

            {errorMSG && <p className='error-message'>{errorMSG}</p>}

            {!loading && !errorMSG && (
                <>
                    <h1>some egyptian meals</h1>
                    <div className='row'>
                        {mealsEgyptian ? mealsEgyptian?.map((meal) => (
                            <div data-aos="zoom-in" className='card' key={meal.idMeal} onClick={() => { setID(meal.idMeal); navigate(`/Egyptian/${meal.strMeal}/${meal.idMeal}`) }}>
                                <figure className='card-img-top' >
                                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                                </figure>
                                <div className='card-body'>
                                    <p className='text-center'>{meal.strMeal}</p>
                                </div>
                            </div>
                        )) : <div>lodaing</div>}
                    </div>
                </>
            )}
        </div>
    )
}

export default MealsEgyptian;
