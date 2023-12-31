import React from 'react';
import PriceCard from './PriceCard';
import { priceDatas } from '../Data/PriceCardData';
const ServicePrice = () => {
    return (
        <div className=' mt-14 md:mt-24'>
            <h1 className='text-2xl md:text-4xl font-bold text-center text-gray-800'>Demo Business Pricing Option</h1>
            <div className='grid gap-4 md:grid-cols-3 mt-12 '>
                {
                    priceDatas.map(priceData => <PriceCard key={priceData.id} priceData={priceData}></PriceCard>)
                }
            </div>



        </div>
    );
};

export default ServicePrice;