import React from 'react';
import ig from '/ig.png';
import baby from '/baby.jpg'
import birthday from "/birthday.jpg"

function InstagramCard({ imageUrl, caption }) {
    return (
        <div className='rounded-lg overflow-hidden shadow-md'>
            <div className='relative'>
                <img src={imageUrl} alt='Instagram Image' className='w-full h-64 object-cover' /> {/* Set fixed height of 64px */}
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40'></div>
            </div>
            <div className='p-4'>
                <p className=' font-semibold'>{caption}</p>
            </div>
        </div>
    );
}

function Gallery() {
    return (
        <div className='bg-white py-8'>
            <div className='container mx-auto border-4 border-[#EEE7D6] p-5'>
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-center text-3xl font-semibold font-serif pt-10'>Gallery</h1>
                    <div className='grid grid-cols-3 gap-4 mt-12'>
                        <InstagramCard imageUrl={baby} caption='Beautiful sunset view 🌅' />
                        <InstagramCard imageUrl={baby} caption='Exploring new places 🌍' />
                        <InstagramCard imageUrl={birthday} caption='Family time ❤️'  />
                        <InstagramCard imageUrl={baby} caption='Beautiful sunset view 🌅' />
                        <InstagramCard imageUrl={baby} caption='Exploring new places 🌍' />
                        <InstagramCard imageUrl={birthday} caption='Family time ❤️'  />
                    </div>
                    <div className='text-center mt-8'>
                        <button className='px-6 py-3 bg-white text-black border font-semibold border-black rounded-lg hover:bg-gray-200 transition-colors duration-300'>Load More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
