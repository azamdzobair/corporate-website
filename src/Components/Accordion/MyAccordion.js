import React, { useState } from 'react';

const MyAccordion = (props) => {
    const { Qustion, Answer } = props.accordionData;
    const [show, setShow] = useState(false);
    return (
        <div className='text-white my-4'>
            <div className='flex items-center bg-green-700 p-2'>
                <p className='text-2xl font-bold mr-2' onClick={() => setShow(!show)}>{show ? '-' : '+'}</p>
                <h1 className='text-1xl font-bold'>{Qustion}</h1>
            </div>
            <div className=' bg-green-600'>
                <div className='ml-4'>
                    {
                        show && <p>{Answer}</p>
                    }
                </div>
            </div>

        </div>
    );
};

export default MyAccordion;