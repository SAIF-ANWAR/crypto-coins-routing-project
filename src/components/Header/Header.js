import React from 'react';
// import { Link } from 'react-router-dom';
import { CustomLink } from '../../Custom-Link/CustomLink'

const Header = () => {
    return (
        <div className='bg-gray-600 py-5 text-xl text-white flex justify-between px-20'>
            <div>
                <h2 className='text-yellow-500'>Crypto  Cafe</h2>
            </div>
            <div className='px-2 flex' >
                <CustomLink className='mx-2' to="/">Home</CustomLink>
                <CustomLink className='mx-2' to="/coins">Coins</CustomLink>
                <CustomLink className='mx-2' to="/contact">Contact</CustomLink>
                <CustomLink className='mx-2' to="/about">About</CustomLink>
            </div>

        </div>
    );
};

export default Header;