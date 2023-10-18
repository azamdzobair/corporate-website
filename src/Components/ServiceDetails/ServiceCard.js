import React from 'react';



const ServiceCard = ({ cardData }) => {
    return (
        <div>



            <div className='  bg-amber-600 ml-4 p-4' >
                <img className='w-16 h-16 ' src={cardData.icon} />

                <h1 className='text-lg font-bold  text-white my-2'>{cardData.title}</h1>
                <p className=' text-white '>{cardData.des}</p>

            </div>






        </div >
    );
};

export default ServiceCard;