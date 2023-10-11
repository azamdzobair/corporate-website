import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Feature = ({ feature }) => {
    return (
        <div className='flex items-center mb-2'>
            <FontAwesomeIcon icon={faCircleCheck} className="h-5 w-5 text-white" />
            <p className='ml-3 text-white text-lg'>{feature}</p>
        </div>

    );
};

export default Feature;



