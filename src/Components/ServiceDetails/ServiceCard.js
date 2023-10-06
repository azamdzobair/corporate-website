import React from 'react';

const ServiceCard = ({ cardData }) => {
    return (
        <div>
            <div className='' >
                <img className='w-16 h-16 ' src={cardData.icon} />

                <h1 className='text-lg font-bold text-gray-800 my-2'>{cardData.title}</h1>
                <p className=' text-gray-800'>{cardData.des}</p>

            </div>
        </div>
    );
};

export default ServiceCard;