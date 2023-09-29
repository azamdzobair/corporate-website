import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='mr-10 hover:text-white font-medium'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;