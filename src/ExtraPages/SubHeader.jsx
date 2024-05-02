import React from 'react';
import { MdOutlineCall } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';

function SubHeader() {
    return (
        <div className='bg-gradient-to-r from-pink-500 to-purple-600 py-4'>
            <div className='container mx-auto flex justify-between items-center px-4'>
                <div className='flex items-center text-white'>
                    <MdOutlineCall className='text-xl' />
                    <a href='tel:+1230986515' className='ml-2 font-semibold'>+1-230-986-515</a>
                </div>
                <div className='flex items-center text-white'>
                    <FiMail className='text-xl' />
                    <a href='mailto:asreyanshsarma@hmail.com' className='ml-2 font-semibold'>asreyanshsarma@hmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default SubHeader;
