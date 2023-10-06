import React from 'react';
import PriceCard from './PriceCard';
import { priceDatas } from '../Data/PriceCardData';
const ServicePrice = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold bg-lime-500 text-purple-50 p-12 mt-10'>Demo Business Pricing Option</h1>
            <div className='grid md:grid-cols-3 '>
                {
                    priceDatas.map(priceData => <PriceCard key={priceData.id} priceData={priceData}></PriceCard>)
                }
            </div>



        </div>
    );
};

export default ServicePrice;