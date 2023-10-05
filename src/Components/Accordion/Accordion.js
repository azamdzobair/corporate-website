import React, { useState } from 'react';
import { accordionDatas } from '../Data/AccordionData';
import MyAccordion from './MyAccordion';

const Accordion = () => {
    // const [data, setData] = useState();
    return (
        <div className='mt-10'>
            {

                accordionDatas.map((accordionData) => (
                    <MyAccordion accordionData={accordionData} key={accordionData.id}></MyAccordion>
                ))


            }
        </div>
    );
};

export default Accordion;