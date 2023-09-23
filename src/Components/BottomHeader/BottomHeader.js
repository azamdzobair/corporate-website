import React, { useState } from 'react';
import Link from './Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const BottomHeader = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'HOME', path: '/HOME' },
        { id: 2, name: 'ABOUT US', path: '/ABOUT US' },
        { id: 3, name: 'SERVICE', path: '/SERVICE' },
        { id: 4, name: 'MEMBERS', path: '/MEMBERS' },
        { id: 5, name: 'CONTACT', path: '/CONTACT' },
    ]
    return (
        <nav>
            <div onClick={() => setOpen(!open)} >
                {
                    open ? <FontAwesomeIcon icon={faXmark} />

                        : <FontAwesomeIcon icon={faBars} />
                }
            </div>




            <ul className='md:flex justify-center'>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)

                }
            </ul>
        </nav >
    );
};

export default BottomHeader;