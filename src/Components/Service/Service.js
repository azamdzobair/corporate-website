import React from 'react';
import ServicePrice from '../ServicePrice/ServicePrice';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const Service = () => {
    return (
        <div className=' px-6 mx-auto md:px-24 mt-14  md:mt-24'>
            <div className='text-gray-800'>
                <h1 className='text-2xl  md:text-4xl text-center font-bold mb-5'> About Our Business Service Plan </h1>
                <p className='text-center '>Aenean purus esse habitant facilisi rhoncus metus aut sodales voluptas veniam aute, incidunt semper iusto? Praesent! Lobortis? Tellus ipsa. Laborum. Platea, nec! Ullam repellat aenean feugiat, tempor.</p>
            </div>
            <ServiceDetails></ServiceDetails>
            <div>
                <ServicePrice></ServicePrice>
            </div>
        </div>
    );
};

export default Service;