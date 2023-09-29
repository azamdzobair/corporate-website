import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import ShowModel from './ShowModel';

const Model = () => {
    const [openModel, setOpenModel] = useState(false);
    const closeModel = () => setOpenModel(false);


    return (
        <div>
            <div onClick={() => setOpenModel(true)} className='h-16 w-16 bg-emerald-600 flex justify-center items-center'>
                <FontAwesomeIcon icon={faBars} className='w-7 h-7' />
            </div>

            {
                openModel && <ShowModel closeModel={closeModel} ></ShowModel>

            }



        </div>

    );
};

export default Model;