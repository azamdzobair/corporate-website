import React from 'react';
import { HeaderCardData } from '../Data/HeaderCardData';
import BannerHeaderCard from './BannerHeaderCard';
import img01 from '../../image/img01.png';
import Banner from '../../image/Banner.jpg';

const BannerHeader = () => {
    return (
        <div id='home' className='relative h-[1500px] sm:h-[950px] md:h-[950px]'>
            <div className='bg-black bg-opacity-50 h-[1500px] w-full absolute sm:h-[950px] md:h-[950px]' >

                <div className='mx-auto px-6 mt-14 sm:px-24 sm:mt-20 md:px-24 md:mt-20'>
                    <div className='md:flex items-center '>
                        <div className='sm:w-1/2 md:w-1/2'>
                            <h1 className='text-4xl text-white sm:text-6xl md:text-6xl font-bold '>
                                We Are Best Law<br /> Firm Since 1989
                            </h1>
                            <p className='text-sm text-white my-4 text-justify sm:text-lg sm:my-10 md:text-lg md:my-10 '>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the world, when an unknown printer.
                            </p>
                            <button className='p-4 bg-amber-600 duration-500 ease-in hover:bg-amber-700 text-white'>APPOINMENT</button>
                        </div>
                        <div className='md:w-1/2 sm:w-1/2 mt-8 sm:mt-0 sm:ml-4 md:mt-0 md:ml-4'>
                            <img src={img01} />

                        </div>
                    </div>



                    <div className=" md:flex justify-center sm:flex ">
                        {HeaderCardData.map((item) => (
                            <BannerHeaderCard item={item} key={item.id}></BannerHeaderCard>
                        ))}
                    </div>
                </div>

            </div>

            <img className='h-full ' src={Banner} />

        </div>

    );
};

export default BannerHeader;