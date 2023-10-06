import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const ServiceDetails = () => {
    const [cardDatas, setCardDatas] = useState([]);
    useEffect(() => {
        fetch('ServiceData.json')
            .then(res => res.json())
            .then(data => setCardDatas(data));
    }, []);
    return (
        <div className='flex my-16'>
            <div className='p-10 w-1/3 '>
                <h1 className='text-2xl font-bold text-gray-800 mb-3'>Trusted By Our<br></br> Best Service</h1>
                <p className='mb-6 text-gray-800'>Hic voluptatibus asperiores animi vero. Felis ipsum. Gravida aspernatur adipisci mus adipisci ipsam etiam, repellendus aptent aliquam quas, aptent ab curabitu.</p>
                <button className='bg-orange-500 py-2 px-4 text-lg font-medium text-white hover:bg-orange-700 duration-500 ease-in '>More Service</button>
            </div>

            <div className='flex'>

                {
                    cardDatas.map(cardData => <ServiceCard key={cardData.id}
                        cardData={cardData}
                    >

                    </ServiceCard>)


                }
            </div>




        </div>
    );
};

export default ServiceDetails;