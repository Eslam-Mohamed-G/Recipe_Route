import React, { createContext, useState, useEffect  } from 'react';
import axios from "axios";

export const dataContext = createContext();

function ContextAPIProvider({ children }) {
    const [meal, setMeal] = useState([]);
    const [loading, setLoading] = useState(false);

    // List all meal categories
    const fetchMeal = async ()=>{
        setLoading(true);
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            setMeal(response?.data)
            console.log(response?.data?.categories);
        } catch (error) {
            console.error('Error fetching categories:', error);
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchMeal();
        return () => {
            
        };
    }, []);
    return (
        <dataContext.Provider value={{ meal, setMeal, loading }}>
            {children}
        </dataContext.Provider>
    )
}

export default ContextAPIProvider;
