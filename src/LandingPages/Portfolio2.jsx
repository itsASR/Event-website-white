import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import baby from '/baby.jpg';
import birthday from '/birthday.jpg';

function Portfolio2() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    // bg-gradient-to-r from-pink-500 to-purple-600
    return (
        <div className='bg-white py-8'>
            <h1 className='text-center text-3xl pt-20 pb-10 font-semibold font-serif'>Product Highlights</h1>
            <div className='container mx-auto '>
                <div className='flex flex-col md:flex-row justify-around items-center bg-white rounded-3xl py-5 mb-10'>
                    <div className='w-full md:w-2/5 md:h-[500px] bg-white shadow-lg rounded-lg overflow-hidden mb-8 md:mb-0 md:mr-4'>
                        <img src={baby} alt='Baby' className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full md:w-2/5 md:h-[500px] bg-white shadow-lg rounded-lg overflow-hidden'>
                        <div className='p-8'>
                            <h1 className='text-3xl font-semibold mb-4'>Baby Shower</h1>
                            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, possimus.</p>
                        </div>
                        <Slider {...settings}>
                            <div className='p-8'>
                                <div className="bg-gray-100 rounded-lg p-4 mt-4">
                                    <div className="text-center">
                                        <h2 className="text-xl font-semibold mb-2">Customer Review</h2>
                                        <p className="text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                                        <p className="text-sm text-gray-600 mt-2">- John Doe</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-8'>
                                <div className="bg-gray-100 rounded-lg p-4 mt-4">
                                    <div className="text-center">
                                        <h2 className="text-xl font-semibold mb-2">Customer Review</h2>
                                        <p className="text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                                        <p className="text-sm text-gray-600 mt-2">- Jane Smith</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>





                <div className='flex flex-col md:flex-row justify-around items-center pt-8 bg-white rounded-3xl py-5'>
                    <div className='w-full md:w-2/5 md:h-[500px] bg-white shadow-lg rounded-lg overflow-hidden mb-8 md:mb-0 md:mr-4'>
                    <div className='p-8'>
                            <h1 className='text-3xl font-semibold mb-4'>Birthday Party</h1>
                            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, possimus.</p>
                        </div>
                    <Slider {...settings}>
                            <div className='p-8'>
                                <div className="bg-gray-100 rounded-lg p-4 mt-4">
                                    <div className="text-center">
                                        <h2 className="text-xl font-semibold mb-2">Customer Review</h2>
                                        <p className="text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                                        <p className="text-sm text-gray-600 mt-2">- John Doe</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-8'>
                                <div className="bg-gray-100 rounded-lg p-4 mt-4">
                                    <div className="text-center">
                                        <h2 className="text-xl font-semibold mb-2">Customer Review</h2>
                                        <p className="text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                                        <p className="text-sm text-gray-600 mt-2">- Jane Smith</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className='w-full md:w-2/5 md:h-[500px] bg-white shadow-lg rounded-lg overflow-hidden'>
                        <img src={birthday} alt='Birthday' className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio2;
