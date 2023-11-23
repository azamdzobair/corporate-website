import React from 'react';
import img02 from '../../image/img02.jpg';
import img03 from '../../image/img03.jpg';
import img04 from '../../image/img04.jpg';
import img08 from '../../image/img08.jpg';
import Accordion from '../Accordion/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Hire from './Hire';
const About = () => {
    return (
        <div className='mt-14 md:mt-24 sm:mt-24'>
            <div className='mx-auto px-6 sm:px-24 md:px-24'>
                <div>
                    <h1 className='text-2xl text-center font-bold mb-5 text-gray-800 md:text-4xl sm:text-4xl'>Introduction About Our Business  </h1>
                    <p className='text-center  text-gray-800'>Aenean purus esse habitant facilisi rhoncus metus aut sodales voluptas veniam aute, incidunt semper iusto? Praesent! Lobortis? Tellus ipsa. Laborum. Platea, nec! Ullam repellat aenean feugiat, tempor.</p>
                </div>
                <div className='mt-14 sm:flex items-center '>
                    <img src={img02} />
                    <div className='bg-amber-500 w-full p-10'>
                        <div className=' flex items-center'>
                            <img className='rounded-full ring-4 ring-white w-28 h-28 ' src={img03} />
                            <div className='ml-6'>
                                <h2 className='text-2xl font-bold text-white'>William Smith</h2>
                                <p className='text-1xl text-white'>Head Advocate, CEO</p>

                            </div>

                        </div>
                        <Accordion></Accordion>
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                    <button className='bg-amber-500 py-2 px-4 text-lg font-medium text-white hover:bg-orange-700 duration-500 ease-in '>More About Us</button>
                </div>
            </div>
            <Hire></Hire>
        </div >
    );
};

export default About;