import React from 'react';

function Footer() {
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-lg font-semibold">Connect with Us</p>
                <div className="flex justify-center mt-4">
                    <a href="#" className=" mr-4 hover:text-gray-200 transition duration-300">
                        Facebook
                    </a>
                    <a href="#" className=" mr-4 hover:text-gray-200 transition duration-300">
                        Twitter
                    </a>
                    <a href="#" className=" mr-4 hover:text-gray-200 transition duration-300">
                        Instagram
                    </a>
                    <a href="#" className=" hover:text-gray-200 transition duration-300">
                        LinkedIn
                    </a>
                </div>
                <div className="mt-8">
                    <p className=" text-lg font-semibold">Contact Information</p>
                    <p className="">123 Main Street, Cityville, ABC 12345</p>
                    <p className="">Phone: +1-123-456-7890</p>
                    <p className="">Email: info@example.com</p>
                </div>
                <p className=" text-sm mt-8">&copy; 2024 Your Website. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
