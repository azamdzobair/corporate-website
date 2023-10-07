import React from 'react';
import img02 from '../../image/img02.jpg';
const Quote = () => {
    return (
        <div className=' bg-gray-200 w-full flex items-center justify-center p-20'>
            <div className='mr-10'>
                <img className='w-80 ' src={img02} />
            </div>
            <div className='  w-[600px] ml-10'>
                <span className='text-4xl'>"</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <span className='text-4xl'>"</span>
            </div>
        </div>
    );
};

export default Quote;