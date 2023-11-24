import React, { useState } from 'react';
import Linkk from './Linkk';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars, faXmark, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import logo1 from '../../logo1.png';

import Model from '../Model/Model';

const BottomHeader = () => {
    const [open, setOpen] = useState(false);
    // const routes = [
    //     { id: 1, name: 'HOME', path: '/HOME' },
    //     { id: 2, name: 'ABOUT', path: '/ABOUT ', },
    //     { id: 3, name: 'SERVICE', path: '/SERVICE' },
    //     { id: 4, name: 'MEMBERS', path: '/MEMBERS' },
    //     { id: 5, name: 'BLOG', path: '/BLOG' },
    //     { id: 6, name: 'CONTACT', path: '/CONTACT' },
    // ]
    const routes = [
        { id: 1, name: 'HOME', link: 'home' },
        { id: 2, name: 'ABOUT', link: 'about', },
        { id: 3, name: 'SERVICE', link: 'service' },
        { id: 4, name: 'MEMBERS', link: 'members' },
        { id: 5, name: 'BLOG', link: 'blog' },
        { id: 6, name: 'CONTACT', link: 'contact' },
    ]
    return (
        <nav className='bg-blue-500 sticky  relative h-14 z-10 '>
            <div className=' container mx-auto px-6  flex items-center justify-between '>
                <a className='text-2xl  font-bold text-white ' href='#'>AZADI</a>

                <div>
                    <div onClick={() => setOpen(!open)} className='sm:hidden' >
                        {
                            open ? <FontAwesomeIcon icon={faXmark} className='w-7 h-7' />

                                : <FontAwesomeIcon icon={faBars} className='w-7 h-7' />
                        }
                    </div>






                    <ul className={`absolute bg-blue-700 w-full  top-10 right-0 p-4 text-center duration-500 ease-in list-none  ${open ? 'top-14' : 'hidden'} sm:h-14 sm:block sm:relative sm:top-0 sm:flex sm:items-center `}>
                        {
                            routes.map(route => <Linkk key={route.id}

                                route={route}>

                            </Linkk>)

                        }

                    </ul>
                </div>
                <div className='flex'>
                    <div className='bg-amber-500 h-14 px-2 text-sm text-white font-mediuum flex items-center'>
                        <div>
                            <FontAwesomeIcon icon={faPhoneVolume} className='w-6 h-6 mr-2' />
                        </div>
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