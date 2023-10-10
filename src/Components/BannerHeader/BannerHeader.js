import React from 'react';
import { HeaderCardData } from '../Data/HeaderCardData';
import BannerHeaderCard from './BannerHeaderCard';
import img01 from '../../image/img01.png';

const BannerHeader = () => {
    return (
        <div className='bg-green-500 w-full' >

            <div className='mx-auto px-24'>
                <div className='md:flex items-center'>
                    <div className='md:w-1/2'>
                        <h1 className='text-4xl md:text-5xl font-bold mt-10'>
                            We Are Best Law<br /> Firm Since 1989
                        </h1>
                        <p className='text-lg py-8 text-justify'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                        </p>
                        <button className='p-2 bg-white'>APPOINMENT</button>
                    </div>
                    <div className='md:w-1/2 ml-6'>
                        <img src={img01} />

                    </div>
                </div>



                <div className=" md:flex mb-16">
                    {HeaderCardData.map((item) => (
                        <BannerHeaderCard item={item} key={item.id}></BannerHeaderCard>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default BannerHeader;