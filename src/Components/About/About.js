import React from 'react';
import img02 from '../../image/img02.jpg';
import img03 from '../../image/img03.jpg';
import img04 from '../../image/img04.jpg';
import img08 from '../../image/img08.jpg';
import Accordion from '../Accordion/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    return (
        <div className='mt-24'>
            <div className='mx-auto px-24'>
                <div>
                    <h1 className=' text-4xl text-center font-bold mb-5 text-gray-800'>Introduction About Our Business Firm </h1>
                    <p className='text-center mx-60 text-gray-800'>Aenean purus esse habitant facilisi rhoncus metus aut sodales voluptas veniam aute, incidunt semper iusto? Praesent! Lobortis? Tellus ipsa. Laborum. Platea, nec! Ullam repellat aenean feugiat, tempor.</p>
                </div>
                <div className='mt-16 flex items-center  '>
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
                <div className='flex justify-center mt-16'>
                    <button className='bg-amber-500 py-2 px-4 text-lg font-medium text-white hover:bg-orange-700 duration-500 ease-in '>More About Us</button>
                </div>
            </div>
            <div className='flex  mt-24'>

                <div className='w-1/2 relative '>
                    <img className='absolute' src={img04} />
                    <div className=' bg-gray-900 bg-opacity-50 w-full h-[450px]  absolute py-12 px-24'>
                        <div className='mb-6 text-white'>
                            <h1 className='text-4xl  font-bold mb-3'>Hire Us For Any Types Of Business Related Services !</h1>
                            <p>Hic voluptatibus asperiores animi vero. Felis ipsum. Gravida aspernatur adipisci mus adipisci ipsam etiam, repellendus aptent aliquam quas, aptent ab curabitu.</p>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2 mb-4'>
                                <h1 className='text-xl text-white font-bold mr-6 '>Monday - Friday 9:00 AM - 6:00 pm Sunday & Public Holidays (Closed)
                                </h1>
                            </div>
                            <div className='text-white'>
                                <div className='flex items-center mb-2 '>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <p className='ml-2'>Deleniti, aliquid nullam.</p>
                                </div>
                                <div className='flex items-center mb-2 '>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <p className='ml-2'>Deleniti, aliquid nullam.</p>
                                </div>
                                <div className='flex items-center mb-2 '>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <p className='ml-2'>Deleniti, aliquid nullam.</p>
                                </div>
                                <div className='flex items-center mb-2 '>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <p className='ml-2'>Deleniti, aliquid nullam.</p>
                                </div>

                            </div>
                        </div>
                        <button className='bg-amber-500 py-2 px-4 text-lg font-medium text-white hover:bg-orange-700 duration-500 ease-in '>HIRE US NOW!</button>
                    </div>



                </div>
                <div className='w-1/2 relative flex items-center'>
                    <img className='' src={img08} />
                    <div className=' absolute '>
                        <div className='bg-white w-48 h-40'>

                        </div>
                        <div className='bg-amber-500 w-48 h-40'>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default About;