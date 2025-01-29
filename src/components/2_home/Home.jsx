import React, { useEffect, useState, useContext } from 'react';
import { dataContext } from '../Context/ContextAPIProvider';
import ResponsiveSlider from './ResponsiveSlider';
import BrowserCountry from './BrowserCountry';
import MealsEgyptian from './MealsEgyptian';

function Home() {
    const { meal, loading } = useContext(dataContext);
    return (
        <div className='container'>
            <ResponsiveSlider/>
            <MealsEgyptian/>
            <BrowserCountry/>
        </div>
    )
}

export default Home;
