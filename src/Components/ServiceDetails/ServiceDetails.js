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





        <div className=' sm:flex md:flex mt-14'>
            {
                cardDatas.map(cardData =>



                    <ServiceCard key={cardData.id}
                        cardData={cardData}
                    >

                    </ServiceCard>






                )


            }
        </div>












    );
};

export default ServiceDetails;