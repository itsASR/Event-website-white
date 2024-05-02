import React from 'react';
import baby from '/baby.jpg';

const Gallery2 = () => {
    return (
        <div className="bg-gray-100 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="relative overflow-hidden rounded-lg">
                    <img src={baby} alt="Image 1" className="object-cover w-full h-80 md:h-96 lg:h-64" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-center">Caption for Image 1</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                    <img src={baby} alt="Image 2" className="object-cover w-full h-64 md:h-72 lg:h-80" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-center">Caption for Image 2</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                    <img src={baby} alt="Image 3" className="object-cover w-full h-96 md:h-80 lg:h-80" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-center">Caption for Image 3</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                    <img src={baby} alt="Image 4" className="object-cover w-full h-80 md:h-64 lg:h-96" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-center">Caption for Image 4</p>
                    </div>
                </div>
                {/* Add more images here */}
                <div className="relative overflow-hidden rounded-lg">
                    <img src={baby} alt="Image 5" className="object-cover w-full h-64 md:h-80 lg:h-96" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-center">Caption for Image 5</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                    <img src={baby} alt="Image 6" className="object-cover w-full h-80 md:h-96 lg:h-64" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-center">Caption for Image 6</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                    <img src={baby} alt="Image 7" className="object-cover w-full h-96 md:h-72 lg:h-80" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-center">Caption for Image 7</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                    <img src={baby} alt="Image 8" className="object-cover w-full h-72 md:h-64 lg:h-96" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-center">Caption for Image 8</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery2;
