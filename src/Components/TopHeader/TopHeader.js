
import { faFacebook, faTwitter, faSquareInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

const TopHeader = () => {
    return (
        <div className='w-full h-11 bg-indigo-900'>
            <div className=' mx-auto px-24 flex justify-between'>
                <div className='flex items-center'>
                    <p className='mr-4 text-white hover:text-amber-500'>Need Free Service?</p>
                    <p className=' text-white hover:text-amber-500'> <a href="url">Book Schedule Now</a></p>

                </div>
                <div className=' text-white  flex items-center'>
                    <a className='mr-10 hover:text-amber-500' href="url">Company News</a>
                    <a className='mr-10 hover:text-amber-500' href="url">Faq</a>
                    <a className='mr-10 hover:text-amber-500' href="url">Policy
                    </a>
                    <div className=' w-60 h-11 bg-indigo-800 text-2xl flex items-center justify-center '>

                        <div>
                            <FontAwesomeIcon className='mr-5 hover:text-amber-500' icon={faFacebook} />
                            <FontAwesomeIcon className='mr-5 hover:text-amber-500' icon={faTwitter} />
                            <FontAwesomeIcon className='mr-5 hover:text-amber-500' icon={faSquareInstagram} />
                            <FontAwesomeIcon className='mr-5 hover:text-amber-500' icon={faYoutube} />
                            <FontAwesomeIcon className=' hover:text-amber-500' icon={faLinkedin} />
                        </div>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default TopHeader;