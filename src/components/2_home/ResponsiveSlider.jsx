import React, { useContext, useEffect } from "react";
import { dataContext } from "../Context/ContextAPIProvider";
import Slider from "react-slick";
import AOS from 'aos';
import { useNavigate } from "react-router";

function ResponsiveSlider() {
    const { meal, loading, setSelectedCategory } = useContext(dataContext);
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({once: false,});
    }, []);

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
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4, slidesToScroll: 4, infinite: true, dots: false }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 3, slidesToScroll: 1, initialSlide: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            }
        ]
    };

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    if (!meal || meal.length === 0) {
        return <p className="text-center">No meal data available.</p>;
    }

    return (
        <div className="slider-container" data-aos="fade-up">
            <h1 className="slider-title">Popular Meals Categories</h1>
            <Slider {...settings}>
                {meal.map((category, index) => (
                    <div key={index} className="card" onClick={()=>{navigate(`meals/${category?.strCategory}`); setSelectedCategory(category?.strCategory)}}>
                        <div className="card-body">
                            <div className="card-img-top">
                                <img src={category?.strCategoryThumb} alt={category?.strCategory} />
                            </div>
                            <div className="card-title">
                                <h4 className="text-center">{category?.strCategory}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ResponsiveSlider;

