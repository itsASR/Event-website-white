import React from 'react';
import logo from '/logo1.png';

function Header() {
    return (
        <header className='bg-gradient-to-r from-pink-500 to-purple-600 py-6'>
            <div className='container mx-auto flex justify-between items-center px-4'>
                <img className='w-36' src={logo} alt='Dancing Leaf Logo' />
                <nav>
                    <ul className='flex space-x-8 text-white font-semibold'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
