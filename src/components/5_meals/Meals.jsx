import React, { useContext } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { dataContext } from '../Context/ContextAPIProvider';
import SideNav from '../1_navbar/SideNav';

function Meals() {
    const navigate = useNavigate();
    const { category } = useParams();
    const { categories, mealsByCategoy, setSelectedCategory, setID } = useContext(dataContext);
    return (
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
                                    onClick={()=>{
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

                <div className='meal-container'>
                    {mealsByCategoy?.map((meals) => (
                        <div className='meal-card' key={meals.idMeal}>
                            <div className='meal-card-body'>
                                <figure className='meal-img'>
                                    <img src={meals.strMealThumb} alt={meals.strMealThumb} />
                                </figure>
                                <div className="meal-text">
                                </div>
                                <div className='meal-card-footer'>
                                    <p>{meals.strMeal.split(' ').slice(0, 2).join(' ')}</p>
                                    <button 
                                        onClick={()=>{
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
    )
}

export default Meals;
