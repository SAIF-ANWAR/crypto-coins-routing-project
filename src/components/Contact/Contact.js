import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='pt-10  mx-auto'>
            <div>
                <h1 className='font-mono text-3xl'>Contact Us, Our Office Address Down Below</h1>
            </div>
            <div className='mt-4'>
                <Link to="bd-address" className='py-2 px-3  text-white bg-cyan-600 mx-1 rounded-lg mt-3'>
                    US Adress
                </Link>
                <Link to="us-address" className='py-2 px-3  text-white bg-cyan-600  mx-1 rounded-lg mt-3'>
                    US Adress
                </Link>
            </div>
            <div className='flex justify-center items-center w-full mt-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Contact;