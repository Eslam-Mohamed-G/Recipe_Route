import React, { useContext } from 'react';
import { dataContext } from '../Context/ContextAPIProvider';
import SideNav from '../1_navbar/SideNav';
import Footer from '../8_footer/Footer';

function Ingredients() {
    const { Ingredients } = useContext(dataContext);
    console.log(Ingredients);
    return (
        <div className='ingredients-container'>
            <div className='left'>
                <div className='sideNav'>
                    <SideNav />
                </div>
            </div>
            <div className='right'>
                <div className='container'>
                    <h1 className='text-gradient'>Learn, Cook, Eat Your Food</h1>
                    <ul className="">
                        {Ingredients ? Ingredients?.map((element) => (
                            <li className="" key={element.idIngredient}>
                                <div className='li-body'>
                                    <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient}-small.png`} alt={element.strIngredient} />
                                    <p>{element.strIngredient}</p>
                                    {/* <p>{element.strDescription || "No description available"}</p> */}
                                </div>
                            </li>
                        )) : <p>loading...</p>}
                    </ul>
                </div>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default Ingredients;
