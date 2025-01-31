import React, { createContext, useState, useEffect  } from 'react';
import axios from "axios";

export const dataContext = createContext();

function ContextAPIProvider({ children }) {
    const [loading, setLoading] = useState(false);
    
    // List all meal categories for ResponsiveSlider in 2_home  Component
    const [meal, setMeal] = useState(() => {
        const sliderCategories = sessionStorage.getItem('sliderCategories');
        return sliderCategories ? JSON.parse(sliderCategories) : [];
    });
    const fetchMeal = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            sessionStorage.setItem('sliderCategories', JSON.stringify(response?.data?.categories));
            setMeal(response?.data?.categories);
            // console.log(response?.data?.categories);
        } catch (error) {
            console.error('Error fetching categories:', error);
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchMeal();
    }, []);
    // List all meal categories for ResponsiveSlider in 2_home Component

    // list all Area for BrowserCountery in 2_home  Componenet
    const [countery, setCountery] = useState([]);
    const fetchArea = async ()=>{
        setLoading(true);
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
            setCountery(response?.data?.meals)
            // console.log(response?.data?.meals);
        } catch (error) {
            console.error('Error fetching categories:', error);
        } finally {
            setLoading(false);
        };
    };
    // list all Area for BrowserCountery in 2_home  Componenet

    useEffect(() => {
        fetchArea();
    }, []);

    // Fetch meals by selected area
    const [selectedArea, setSelectedArea] = useState(null);
    const [mealsArea, setMealsArea] = useState(()=>{
        const savedMeals = sessionStorage.getItem('savedMeals');
        return savedMeals ? JSON.parse(savedMeals) : [];
    });
    const fetchAreaMeals = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`);
            setMealsArea(response?.data?.meals);
            sessionStorage.setItem('savedMeals', JSON.stringify(response?.data?.meals))
            // console.log(response?.data?.meals);
        } catch (error) {
            console.error('Filter meals by Area:', error);
        } finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        if (selectedArea) {
            fetchAreaMeals()
        }
    }, [selectedArea]);
    // Fetch meals by selected area

    // Lookup full meal details by id
    const [details, setDetails] = useState(()=>{
        const savedDetails = sessionStorage.getItem('savedDetails');
        return  savedDetails ? JSON.parse(savedDetails) : [];
    });
    const [id, setID] = useState(null)
    const fetchDetailsById = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            // console.log(response?.data?.meals);
            setDetails(response?.data?.meals);
            sessionStorage.setItem('savedDetails', JSON.stringify(response?.data?.meals));
        } catch (error) {
            console.error('meals details:', error);
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(id) {
            fetchDetailsById();
        }
    }, [id]);
    // Lookup full meal details by id

        // List all meal categories for ResponsiveSlider in 5_meals Component
        const [categories, setCategories] = useState(() => {
            const mealsCategories = sessionStorage.getItem('mealsCategories');
            return mealsCategories ? JSON.parse(mealsCategories) : [];
        });
        const fetchMealCategories = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
                sessionStorage.setItem('mealsCategories', JSON.stringify(response?.data?.meals));
                setCategories(response?.data?.meals);
                console.log(response?.data?.meals);
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setLoading(false);
            };
        };
    
        useEffect(() => {
            fetchMealCategories();
        }, []);
        // List all meal categories for in 5_meals Component
        
        // Filter by Category for in 5_meals Component
        const [selectedCategory, setSelectedCategory] = useState(()=>{
            const savedCategory = sessionStorage.getItem('savedCategory');
            return savedCategory ? JSON.parse(savedCategory) : 'Beef';
        });
        const [mealsByCategoy, setMealsByCategoy] = useState([]);
        const fetchMealsByCategory = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
                setMealsByCategoy(response?.data?.meals);
                console.log(response?.data?.meals);
            } catch (error) {
                console.error('Filter meals by Category:', error);
            }
        }
        useEffect(() => {
            if(selectedCategory){
                fetchMealsByCategory();
            }
        }, [selectedCategory]);
        // Filter by Category for in 5_meals Component

        // List all Ingredients for in 6_Ingredients Component
        const [Ingredients, setIngredients] = useState([]);
        const fetchAllIngredients = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
                setIngredients(response?.data?.meals);
                // console.log(response?.data?.meals);
            } catch (error) {
                console.error('List all Ingredients:', error);
            }
        };
        useEffect(() => {
            fetchAllIngredients();
        }, []);
        // List all Ingredients for in 6_Ingredients Component


    return (
        <dataContext.Provider value={{ meal, countery, categories, mealsByCategoy, setSelectedCategory, setMeal, loading, selectedArea, setSelectedArea, mealsArea, setID, details, Ingredients }}>
            {children}
        </dataContext.Provider>
    )
}

export default ContextAPIProvider;
