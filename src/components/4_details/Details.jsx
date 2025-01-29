import React, { useContext } from 'react'
import { dataContext } from '../Context/ContextAPIProvider';

function Details() {
    const { details, loading } = useContext(dataContext);
    return (
        <div className='container'>
            {details?.map((element) => (
                <div className="row details" key={element.idMeal}>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <figure className='card-img-top' >
                                    <img src={element.strMealThumb} alt={element.strMeal} />
                                </figure>
                                <h1 className='text-center'>{element.strMeal}</h1>
                            </div>
                            <div className='card-footer'>
                                <span className='card-span'><a className='card-link' href={element.strYoutube} target='blank' >youtube</a></span>
                                <span className='card-span'><a className='card-link' href={element.strSource} target='blank' >source</a></span>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-8'>
                        <h1 className='text-gradient'>Learn, Cook, Eat Your Food</h1>
                        <h1>Ingredients</h1>
                        <ul className=''>
                            {Array.from({ length: 20 }, (_, i) => {
                                const ingredient = element[`strIngredient${i + 1}`];
                                const measure = element[`strMeasure${i + 1}`];
                                return ingredient ? (
                                    <li key={i}>
                                        <img src={`https:/www.themealdb.com/images/ingredients/${ingredient}.png`} alt={ingredient} />
                                        <p>{ingredient}</p> 
                                        <p>{measure}</p>
                                    </li>
                                ) : null
                            })}
                        </ul>
                        <h1>Instructions</h1>
                        <p>{element.strArea}</p>
                        <p>{element.strInstructions}</p>

                        {/* <ul>
                            <li>{element.strIngredient1}{element.strMeasure1} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient1}.png`} alt={element.strIngredient1} /></li>
                            <li>{element.strIngredient2}{element.strMeasure2} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient2}.png`} alt={element.strIngredient2} /></li>
                            <li>{element.strIngredient3}{element.strMeasure3} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient3}.png`} alt={element.strIngredient3} /></li>
                            <li>{element.strIngredient4}{element.strMeasure4} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient4}.png`} alt={element.strIngredient4} /></li>
                            <li>{element.strIngredient5}{element.strMeasure5} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient5}.png`} alt={element.strIngredient5} /></li>
                            <li>{element.strIngredient6}{element.strMeasure6} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient6}.png`} alt={element.strIngredient6} /></li>
                            <li>{element.strIngredient7}{element.strMeasure7} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient7}.png`} alt={element.strIngredient7} /></li>
                            <li>{element.strIngredient8}{element.strMeasure8} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient8}.png`} alt={element.strIngredient8} /></li>
                            <li>{element.strIngredient9}{element.strMeasure9} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient9}.png`} alt={element.strIngredient9} /></li>
                            <li>{element.strIngredient10}{element.strMeasure10} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient10}.png`} alt={element.strIngredient10} /></li>
                            <li>{element.strIngredient11}{element.strMeasure11} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient11}.png`} alt={element.strIngredient11} /></li>
                            <li>{element.strIngredient12}{element.strMeasure12} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient12}.png`} alt={element.strIngredient12} /></li>
                            <li>{element.strIngredient13}{element.strMeasure13} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient13}.png`} alt={element.strIngredient13} /></li>
                            <li>{element.strIngredient14}{element.strMeasure14} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient14}.png`} alt={element.strIngredient14} /></li>
                            <li>{element.strIngredient15}{element.strMeasure15} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient15}.png`} alt={element.strIngredient15} /></li>
                            <li>{element.strIngredient16}{element.strMeasure16} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient16}.png`} alt={element.strIngredient16} /></li>
                            <li>{element.strIngredient17}{element.strMeasure17} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient17}.png`} alt={element.strIngredient17} /></li>
                            <li>{element.strIngredient18}{element.strMeasure18} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient18}.png`} alt={element.strIngredient18} /></li>
                            <li>{element.strIngredient19}{element.strMeasure19} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient19}.png`} alt={element.strIngredient19} /></li>
                            <li>{element.strIngredient20}{element.strMeasure20} <img src={`https:/www.themealdb.com/images/ingredients/${element.strIngredient20}.png`} alt={element.strIngredient20} /></li>
                        </ul> */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Details;
