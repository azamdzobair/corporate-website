import React from 'react';
import { Link } from 'react-scroll';
const Linkk = ({ route }) => {
    return (
        <li className=' mb-1 list-none sm:mb:0 sm:ml-6 first-of-type:ml-0'>
            <a className='text-white font-semibold hover:text-red-500' ><Link activeClass="active" to={route.link} spy={true} smooth={true} offset={-70} duration={500}>{route.name}</Link></a>
        </li>
    );
};



export default Linkk;