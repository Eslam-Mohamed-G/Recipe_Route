import React, { createContext, useState, useEffect  } from 'react';
import axios from "axios";

export const dataContext = createContext();

function ContextAPIProvider({ children }) {
    const [meal, setMeal] = useState([]);
    const [loading, setLoading] = useState(false);

    // List all meal categories for ResponsiveSlider in Home Component
    const fetchMeal = async ()=>{
        setLoading(true);
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            setMeal(response?.data?.categories)
            console.log(response?.data?.categories);
        } catch (error) {
            console.error('Error fetching categories:', error);
        } finally {
            setLoading(false);
        };
    };
    
    const fetchArea = async ()=>{
        setLoading(true);
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
            setMeal(response?.data?.meals)
            console.log(response?.data?.meals);
        } catch (error) {
            console.error('Error fetching categories:', error);
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchMeal();
        fetchArea();
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
