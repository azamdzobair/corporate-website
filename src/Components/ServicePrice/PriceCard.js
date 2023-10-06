import React from 'react';
import Feature from './Feature';

const PriceCard = ({ priceData }) => {
    const { features } = priceData;
    return (
        <div className=' bg-blue-500 rounded-md p-3 m-3 '>

            <p>
                <span className='text-6xl font-bold text-white'>{priceData.price}</span>
                <span className='text-2xl'>/month</span>

            </p>
            <p className='text-3xl text-white'>{priceData.name}</p>

            <div>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='bg-green-500 p-2 text-lg font-bold text-white w-full mt-2 '>Buy Now</button>



        </div>
    );
};

export default PriceCard;