import React, { useContext } from 'react';
import { dataContext } from '../Context/ContextAPIProvider';
import SideNav from '../1_navbar/SideNav';

function Ingredients() {
    const { Ingredients } = useContext(dataContext);
    console.log(Ingredients);
    return (
        <div className='ingredients-container'>
            <div className='left'>
                <SideNav />
            </div>
            <div className='right'>
                <div className='container'>
                    <div className="row">
                        go
                        {Ingredients ? Ingredients?.map((element) => (
                            <div className="card" key={element.idIngredient}>
                                <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient}-small.png`} alt={element.strIngredient} />
                                <p>{element.strIngredient}</p>
                                {/* <p>{element.strDescription || "No description available"}</p> */}
                            </div>
                        )) : <p>loading...</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ingredients;
