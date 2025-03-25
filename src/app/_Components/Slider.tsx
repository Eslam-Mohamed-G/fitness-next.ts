"use client"
import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";

function Responsive() {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const fetchExercises = async () => {
            const options = {
                method: 'GET',
                url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                headers: {
                    'x-rapidapi-key': '6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a',
                    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
                setExercises(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchExercises();
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
            { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };
    
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {exercises.map((exercise: string, index: number) => (
                    <div className="px-5" key={index}>
                        <div className="rounded bg-white flex flex-col gap-3 items-center justify-center">
                            <img src="/icons/gym.png" alt="GYM" className="w-16 h-16" />
                            <p className="text-lg font-semibold capitalize">{exercise}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Responsive;
