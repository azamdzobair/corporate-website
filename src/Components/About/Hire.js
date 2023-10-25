import React from 'react';
import img04 from '../../image/img04.jpg';
import img08 from '../../image/img08.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import ProgressBarOne from '../ProgressBar/ProgressBarOne';

const Hire = () => {
    return (
        <div className='w-full mt-14 sm:flex md:flex'>

            <div className=' w-full sm:w-1/2 md:w-1/2  '>
                <div className='relative'>

                    <div className=' bg-gray-900 bg-opacity-50 w-full h-[480px]  absolute py-12 px-6'>
                        <div className='mb-6 text-white'>
                            <h1 className='text-3xl  font-bold mb-3'>Hire Us For  Business Related Services !</h1>
                            <p>Hic voluptatibus asperiores animi vero. Felis ipsum. Gravida aspernatur adipisci mus adipisci ipsam etiam, repellendus aptent aliquam quas, aptent ab curabitu.</p>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2 mb-6'>
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
                    <img className=' h-[480px]' src={img04} />
                </div>
            </div>
            <div className=' w-full relative sm:w-1/2 md:w-1/2 flex items-center '>

                <div className=' absolute '>
                    <ProgressBarOne></ProgressBarOne>

                    {/* <div className='w-72 h-72 bg-amber-500 flex items-center justify-center'>
                        <div className='fill-none border-[30px] border-white w-60 h-60 rounded-full transition-all flex items-center justify-center '>
                            <h1 className='text-white text-5xl font-bold'>0%</h1>
                            <div className='w-52 h-52 absolute z-10 rounded-full bg-amber-500'></div>
                            <div className=' flex items-center justify-center'>
                                <div className='w-60 h-60 bg-white absolute rounded-full '>
                                    <div className='progrss'>

                                    </div>
                                </div>
                                <div className='w-60 h-60 bg-white absolute rounded-full '>
                                    <div className='progrss'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <img className='h-[480px] ' src={img08} />

            </div>
        </div >
    );
};

export default Hire;