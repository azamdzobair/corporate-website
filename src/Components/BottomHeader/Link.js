import React from 'react';

const Link = ({ route }) => {
    return (
        <li className=' mb-1 list-none sm:mb:0 sm:ml-6 first-of-type:ml-0'>
            <a className='text-white font-semibold hover:text-red-500' href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;