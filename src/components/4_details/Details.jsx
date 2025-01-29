import React, { useContext } from 'react'
import { dataContext } from '../Context/ContextAPIProvider';

function Details() {
    const { details, loading } = useContext(dataContext);
    return (
        <div className='container'>
            {details?.map((element) => (
                <div className="row" key={element.idMeal}>
                    <div className='col-md-4'>
                        <div className='card'>
                            <img src={element.strMealThumb} alt={element.strMeal} />
                            <div className='card-body'>
                                <h1>{element.strMeal}</h1>
                            </div>
                            <div className='card-footer'>
                                <span><a href={element.strYoutube} target='blank' >youtube</a></span>
                                <span><a href={element.strSource} target='blank' >source</a></span>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-8'>
                        <p>{element.strArea}</p>
                        <p>{element.strInstructions}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Details;
