import React, { useState } from 'react';
import Link from './Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars, faXmark, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import logo1 from '../../logo1.png';

import Model from '../Model/Model';

const BottomHeader = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'HOME', path: '/HOME' },
        { id: 2, name: 'ABOUT', path: '/ABOUT US' },
        { id: 3, name: 'SERVICE', path: '/SERVICE' },
        { id: 4, name: 'MEMBERS', path: '/MEMBERS' },
        { id: 5, name: 'BLOG', path: '/BLOG' },
        { id: 6, name: 'CONTACT', path: '/CONTACT' },
    ]
    return (
        <nav className='bg-purple-700 h-16 '>
            <div className=' mx-auto px-24 flex items-center justify-between'>
                <img className='w-14 h-12' src={logo1} />

                <div onClick={() => setOpen(!open)} className='md:hidden' >
                    {
                        open ? <FontAwesomeIcon icon={faXmark} className='w-5 h-5' />

                            : <FontAwesomeIcon icon={faBars} className='w-5 h-5' />
                    }
                </div>






                <ul className={`bg-purple-700 w-full md:w-0  text-center py-2 md:flex justify-center md:static absolute duration-500 ease-in ${open ? 'top-12' : "top-[-140px]"}`}>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)

                    }

                </ul>
                <div className='flex'>
                    <div className='bg-orange-500 h-16 px-6 text-white font-semibold flex items-center'>
                        <FontAwesomeIcon icon={faPhoneVolume} className='w-8 h-8 mr-3' />
                        <div>
                            <p>Call To Expert</p>
                            <p>+111 222 777</p>
                        </div>
                    </div>
                    <div >

                        <Model></Model>

                    </div>
                </div>
            </div>
        </nav >
    );
};

export default BottomHeader;