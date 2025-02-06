import React, { useContext, useEffect } from 'react';
import { dataContext } from '../Context/ContextAPIProvider';
import SideNav from '../1_navbar/SideNav';
import Footer from '../8_footer/Footer';
import AOS from 'aos';

function Ingredients() {
    const { Ingredients } = useContext(dataContext);
    useEffect(() => {
        AOS.init({once: false,});
    }, []);
    return (
        <>
        <div className='ingredients-container'>
            <div className='left'>
                <div className='sideNav'>
                    <SideNav />
                </div>
            </div>
            <div className='right'>
                <div className='container'>
                    <h1 className='text-gradient'>Learn, Cook, Eat Your Food</h1>
                    <ul className="ingredients-list">
                        {Ingredients ? Ingredients?.map((element) => (
                            <li className="" data-aos="fade-up" key={element.idIngredient}>
                                <div className='li-body'>
                                    <img src={`https://www.themealdb.com/images/ingredients/${element.strIngredient}-small.png`} alt={element.strIngredient} loading='lazy' />
                                    <p>{element.strIngredient}</p>
                                    {/* <p>{element.strDescription || "No description available"}</p> */}
                                </div>
                            </li>
                        )) : <p>loading...</p>}
                    </ul>
                </div>
            </div>
        </div>
            <div className='footer'>
                <Footer/>
            </div>
        </>
    )
}

export default Ingredients;
