import React from 'react';



const ServiceCard = ({ cardData }) => {
    return (
        <div>



            <div className='mb-4 text-center  bg-amber-600 md:ml-4 p-4' >
                <div className='flex justify-center'>
                    <img className='w-16 h-16  ' src={cardData.icon} />
                </div>

                <h1 className='text-lg font-bold  text-white my-2'>{cardData.title}</h1>
                <p className=' text-white '>{cardData.des}</p>

            </div>






        </div >
    );
};

export default ServiceCard;