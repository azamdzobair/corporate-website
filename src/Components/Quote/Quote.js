import React from 'react';
import img02 from '../../image/img02.jpg';
const Quote = () => {
    return (
        <div className=' bg-gray-200 w-full '>
            <div className='mx-auto px-6 md:px-24 py-16 md:flex items-center '>
                <div className='md:mr-10'>
                    <img className=' ' src={img02} />
                </div>
                <div className=' bg-gray-300 p-8 md:ml-10'>
                    <span className='text-4xl'>"</span>
                    <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <span className='text-4xl'>"</span>
                </div>
            </div>
        </div>
    );
};

export default Quote;