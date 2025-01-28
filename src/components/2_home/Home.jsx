import React, { useEffect, useState, useContext } from 'react';
import { dataContext } from '../Context/ContextAPIProvider';
import Slider from 'react-slick';
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

function ResponsiveSlider() {
    const { meal } = useContext(dataContext);
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        easing: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container container">
            <h1 className='slider-title'>Popular Meals categories</h1>
            <Slider {...settings}>
                {meal?.map((category, index) => (
                    <div id={category.idCategory} key={index} className='card'>
                        <div className='card-body'>
                            <div className='card-img-top'>
                                <img src={category.strCategoryThumb} alt={category.strCategory} />
                            </div>
                            <div className='card-title'>
                                <h4 className='text-center'>{category.strCategory}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
