import React from 'react';
import Experience from '../../image/Experience.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faIdCardClip } from '@fortawesome/free-solid-svg-icons';
import img02 from '../../image/img02.jpg';

const Exprience = () => {
    return (
        <div className='relative h-[860px] md:h-[550px] mt-14 md:mt-24'>
            <div className='bg-black bg-opacity-80 flex justify-center  w-full  h-[860px] md:h-[550px] absolute '>



                <div className='md:flex items-center mx-auto p-6 md:px-24'>
                    <div className='  md:w-1/2  flex justify-center'>


                        <div>
                            <div className='flex mb-4'>
                                <div className='bg-amber-500 w-44 h-44 md:w-56 md:h-56 flex items-center mr-4 p-2 '>
                                    <div className='text-center '>
                                        <FontAwesomeIcon className='text-6xl text-white' icon={faUserGraduate} />
                                        <h1 className='text-xl md:text-2xl font-bold text-white'>Our Expertise Is Earned Through Our Experience</h1>
                                    </div>
                                </div>

                                <div className='bg-amber-500 w-44 h-44 md:w-56 md:h-56 flex items-center '>
                                    <img src={img02} />
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='bg-amber-500 w-44 h-44 md:w-56 md:h-56 flex items-center mr-4 '>
                                    <img src={img02} />
                                </div>

                                <div className='bg-amber-500 w-44 h-44 md:w-56 md:h-56 flex items-center  p-2 '>
                                    <div className='text-center'>
                                        <FontAwesomeIcon className='text-6xl text-white' icon={faIdCardClip} />


                                        <h1 className='text-xl md:text-2xl font-bold text-white'>Our Expertise Is Earned Through Our Experience</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mt-12 md:w-1/2 '>
                        <div>
                            <h1 className='text-white text-3xl md:text-4xl font-bold mb-4'>Experience you can trust,<br /> Service you can count !</h1>
                            <p className='text-white'>Hic voluptatibus asperiores animi vero. Felis ipsum. Gravida aspernatur adipisci mus adipisci ipsam etiam, repellendus apten.</p>
                        </div>

                        <div className='my-6'>
                            <div className='flex mb-4 '>

                                <div className=' text-white mr-6'>
                                    <h1 className='text-5xl font-bold '>320+</h1>
                                    <p className='text-lg'>Project Done</p>
                                </div>


                                <div className=' text-white'>
                                    <h1 className='text-5xl font-bold '>25+</h1>
                                    <p className='text-lg'>Award Achieved
                                    </p>
                                </div>
                            </div>

                            <div className='flex mb-4'>

                                <div className=' text-white mr-6'>
                                    <h1 className='text-5xl font-bold '>50+</h1>
                                    <p className='text-lg'>Office Branches
                                    </p>
                                </div>


                                <div className=' text-white'>
                                    <h1 className='text-5xl font-bold '>10k+</h1>
                                    <p className='text-lg'>Happy Customer
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
            <img className='h-full w-full' src={Experience} />
        </div>
    );
};

export default Exprience;

