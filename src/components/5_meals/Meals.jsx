import React, { useContext } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { dataContext } from '../Context/ContextAPIProvider';
import SideNav from '../1_navbar/SideNav';
import Footer from '../8_footer/Footer';

function Meals() {
    const navigate = useNavigate();
    const { category } = useParams();
    const { categories, mealsByCategoy, setSelectedCategory, setID, loading } = useContext(dataContext);

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
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        )
    };
    return (
        <div>
            <div className='mealsContainer'>
                <div className='left'>
                    <div className='sideNav'>
                        <SideNav />
                    </div>
                </div>

                <div className='right'>
                    <div className='container'>
                        <h1 className='text-gradient'>Learn, Cook, Eat Your Food</h1>
                        <div className='categories'>
                            <ul className='categories-list'>
                                {categories?.map((element, index) => (
                                    <li
                                        key={index}
                                        className='list'
                                        onClick={() => {
                                            navigate(`/meals/${element.strCategory}`);
                                            setSelectedCategory(element.strCategory);
                                            sessionStorage.setItem('savedCategory', JSON.stringify(element.strCategory));
                                        }}
                                    >
                                        <NavLink to={`/meals/${element.strCategory}`} className='categories-link'>{element.strCategory}</NavLink>

                                    </li>
                                ))}
                            </ul>

                            <select className="categories-select" defaultValue="">
                                <option value="" disabled>Choose Category</option>
                                {categories?.map((element, index) => (
                                    <option
                                        key={index}
                                        className='list'
                                        onClick={() => {
                                            navigate(`/meals/${element.strCategory}`);
                                            setSelectedCategory(element.strCategory);
                                            sessionStorage.setItem('savedCategory', JSON.stringify(element.strCategory));
                                        }}
                                    >
                                        {element.strCategory}
                                    </option>))}
                            </select>
                        </div>
                    </div>

                    <div className='meal-container container'>
                        {mealsByCategoy?.map((meals) => (
                            <div className='meal-card' key={meals.idMeal}>
                                <div className='meal-card-body'>
                                    <figure className='meal-img'>
                                        <img src={meals.strMealThumb} alt={meals.strMealThumb} />
                                    </figure>
                                    <div className='meal-card-footer'>
                                        <p>{meals.strMeal.split(' ').slice(0, 2).join(' ')}</p>
                                        <button
                                            onClick={() => {
                                                navigate(`/meals/${category}/${meals.strMeal}/${meals.idMeal}`);
                                                setID(meals.idMeal);
                                            }}
                                        >
                                            <span>view recipe</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Meals;
