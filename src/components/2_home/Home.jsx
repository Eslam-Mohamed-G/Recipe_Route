import React, { useContext } from 'react'
import { dataContext } from '../Context/ContextAPIProvider';

function Home() {
    const { meal, loading } = useContext(dataContext);
    return (
        <div>
            {/* <h1>Popular Ingredients</h1>
            <ul>
                {meal?.map((category) => (
                    <li key={category.idCategory}>
                        <h2>{category.strCategory}</h2>
                        <img src={category.strCategoryThumb} alt={category.strCategory} width="200" />
                        <p>{category.strCategoryDescription}</p>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default Home;
