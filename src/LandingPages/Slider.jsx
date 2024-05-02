import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from '/1.png';
import two from '/2.png';
import three from '/3.png';
import four from '/4.png';
import five from '/5.png';
import six from '/6.png';

function Sliders() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false, // Remove arrows
        adaptiveHeight: true, // Adjust slide height dynamically
        responsive: [
            {
                breakpoint: 768, // Adjust settings for smaller screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='bg-white py-8'>
            
                    <h1 className='text-center text-3xl pb-10 font-semibold font-serif'>Glimpses</h1>
                
            <div className='container mx-auto'>
                
                <div className='max-w-4xl mx-auto'>
                    <Slider {...settings}>
                        <div className='w-full h-[400px] rounded-lg overflow-hidden'>
                            <img src={one} alt='Slider Image 1' className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full h-[400px] rounded-lg overflow-hidden'>
                            <img src={two} alt='Slider Image 2' className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full h-[400px] rounded-lg overflow-hidden'>
                            <img src={three} alt='Slider Image 3' className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full h-[400px] rounded-lg overflow-hidden'>
                            <img src={four} alt='Slider Image 4' className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full h-[400px] rounded-lg overflow-hidden'>
                            <img src={five} alt='Slider Image 5' className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full h-[400px] rounded-lg overflow-hidden'>
                            <img src={six} alt='Slider Image 6' className='w-full h-full object-cover' />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Sliders;
