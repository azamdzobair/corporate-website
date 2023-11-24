import React, { useEffect, useState } from 'react';
import MembersCards from './MembersCards';
import Exprience from '../Exprience/Exprience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Members = () => {
    const [membersCardDatas, setMembersCardDatas] = useState([]);
    useEffect(() => {
        fetch('MembersData.json')
            .then(res => res.json())
            .then(data => setMembersCardDatas(data));
    }, []);

    let box = document.querySelector('#all');
    const arrowPrev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;

    }

    const arrowNext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;

    }


    return (
        <div id='members' className='mt-14 md:mt-24'>
            <div className='mx-auto px-6 md:px-24'>
                <div>
                    <h1 className=' text-2xl md:text-4xl text-center text-gray-800 font-bold mb-5'>Introduction About Our Members </h1>
                    <p className='text-center text-gray-800 md:mx-60 '>Aenean purus esse habitant facilisi rhoncus metus aut sodales voluptas veniam aute, incidunt semper iusto? Praesent! Lobortis? Tellus ipsa. Laborum. Platea, nec! Ullam repellat aenean feugiat, tempor.</p>

                </div>
                <div className='flex justify-center items-center mt-12 md:md-16'>

                    <FontAwesomeIcon className='w-10 h-10 cursor-pointer' onClick={arrowPrev} icon={faCircleArrowRight} />

                    <div id='all' className='flex gap-5 py-10  overflow-hidden scroll-smooth w-[1000px] '>
                        {
                            membersCardDatas.map(membersCardData => <MembersCards key={membersCardData.id}
                                membersCardData={membersCardData}
                            >

                            </MembersCards>)



                        }
                    </div>

                    <FontAwesomeIcon className='w-10 h-10 cursor-pointer' onClick={arrowNext} icon={faCircleArrowLeft} />
                </div>
            </div>

            <Exprience></Exprience>

        </div>
    );
};

export default Members;