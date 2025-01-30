import React, { useContext } from 'react';
import Logo from '../../assets/logo.png';
import Favicon from '../../assets/favicon.png';
import { NavLink } from 'react-router-dom';
import { dataContext } from '../Context/ContextAPIProvider';

function Meals() {
    const { categories, mealsByCategoy, setSelectedCategory } = useContext(dataContext);
    return (
        <div className='mealsContainer'>
            <div className='left'>
                <NavLink to={'/'}>
                    <img src={Logo} alt="logo" className='logo' />
                </NavLink>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to='/meals' className="nav-link"><img src={Favicon} alt="nav-logo" className='nav-logo' />Meals</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/#' className="nav-link"><img src={Favicon} alt="nav-logo" className='nav-logo' />Ingredients</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/#' className="nav-link"><img src={Favicon} alt="nav-logo" className='nav-logo' />Area</NavLink>
                    </li>
                </ul>
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
                                        setSelectedCategory(element.strCategory);
                                        sessionStorage.setItem('savedCategory', JSON.stringify(element.strCategory));
                                    }}
                                >
                                    {element.strCategory}
                                </li>
                            ))}
                        </ul>

                        <select className="categories-select" defaultValue="">
                            <option value="" disabled>Choose Category</option>
                            {categories?.map((element, index) => (<option key={index} className='list'>{element.strCategory}</option>))}
                        </select>
                    </div>
                </div>

                <div className='container'>
                    {mealsByCategoy?.map((meals)=>(
                        <div>
                            <img src={meals.strMealThumb} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Meals;
