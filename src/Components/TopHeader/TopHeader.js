
import { faFacebook, faTwitter, faSquareInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

const TopHeader = () => {
    return (
        <div className='w-100% bg-slate-900 h-10 flex justify-between'>
            <div className='flex items-center'>
                <p className='mr-4 text-white'>Need Free Service?</p>
                <p className=' text-white'> <a href="url">Book Schedule Now</a></p>

            </div>
            <div className=' text-white flex items-center'>
                <a className='mr-10 hover:text-orange-600' href="url">Company News</a>
                <a className='mr-10' href="url">Faq</a>
                <a className='mr-10' href="url">Policy
                </a>
                <div className=' w-60 h-10 bg-slate-700 text-2xl flex items-center justify-center '>

                    <div> <FontAwesomeIcon className='mr-5 hover:text-orange-600' icon={faFacebook} />
                        <FontAwesomeIcon className='mr-5 hover:text-orange-600' icon={faTwitter} />
                        <FontAwesomeIcon className='mr-5 hover:text-orange-600' icon={faSquareInstagram} />
                        <FontAwesomeIcon className='mr-5 hover:text-orange-600' icon={faYoutube} />
                        <FontAwesomeIcon className=' hover:text-orange-600' icon={faLinkedin} /></div>
                </div>

            </div>




        </div>
    );
};

export default TopHeader;