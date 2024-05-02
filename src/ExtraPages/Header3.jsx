import React from 'react';
import logo from '/logo.png';
import { MdOutlineCall } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';

function Header3() {
    return (
        <header className='bg-white border-2 border-[#EEE7D6] text-black py-4 font-montserrat'> {/* Royal color gradient */}
            <div className='container mx-auto flex justify-between items-center px-4'>
                <img className='w-20' src={logo} alt='Dancing Leaf Logo' />
                <nav>
                    <ul className='flex space-x-8  font-semibold'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </nav>
                <div className='flex items-center space-x-6 '>
                    <div className='flex items-center'>
                        <MdOutlineCall className='text-xl' />
                        <a href='tel:+1230986515' className='ml-2 font-semibold'>+1-230-986-515</a>
                    </div>
                   
                </div>
            </div>
        </header>



// import React from 'react';
// import { FaBars } from 'react-icons/fa';

// function Header() {
//     return (
//         <header className="bg-gray-900 text-white shadow-lg">
//             <div className="container mx-auto py-4 px-8 flex justify-between items-center">
//                 {/* Logo */}
//                 <div className="flex items-center">
//                     <img src="/logo.png" alt="Dancing Leaf Logo" className="w-12 h-12 mr-2" />
//                     <h1 className="text-xl font-semibold">Dancing Leaf</h1>
//                 </div>

//                 {/* Navigation */}
//                 <nav className="hidden md:flex items-center space-x-6">
//                     <a href="#" className="text-gray-300 hover:text-white">Home</a>
//                     <a href="#" className="text-gray-300 hover:text-white">About Us</a>
//                     <a href="#" className="text-gray-300 hover:text-white">Services</a>
//                     <a href="#" className="text-gray-300 hover:text-white">Portfolio</a>
//                     <a href="#" className="text-gray-300 hover:text-white">Contact</a>
//                 </nav>

//                 {/* Mobile Menu */}
//                 <div className="md:hidden">
//                     <FaBars className="text-3xl text-white" />
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;

    );
}

export default Header3;
