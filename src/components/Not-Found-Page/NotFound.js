import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Link to="/not-found">
            <h1 className='text-3xl mt-10'>The page is not found !!!</h1>
            <h1 className='text-5xl mt-5'>ERROR 404</h1>
        </Link>
    );
};

export default NotFound;