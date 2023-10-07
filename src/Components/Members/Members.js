import React, { useEffect, useState } from 'react';
import MembersCards from './MembersCards';
import Exprience from '../Exprience/Exprience';

const Members = () => {
    const [membersCardDatas, setMembersCardDatas] = useState([]);
    useEffect(() => {
        fetch('MembersData.json')
            .then(res => res.json())
            .then(data => setMembersCardDatas(data));
    }, []);
    return (
        <div className=''>
            <div>
                <h1 className=' text-4xl text-center text-gray-800 font-bold mb-5'>Introduction About Our Members </h1>
                <p className='text-center text-gray-800 mx-60'>Aenean purus esse habitant facilisi rhoncus metus aut sodales voluptas veniam aute, incidunt semper iusto? Praesent! Lobortis? Tellus ipsa. Laborum. Platea, nec! Ullam repellat aenean feugiat, tempor.</p>

            </div>
            <div className='flex my-16'>

                {
                    membersCardDatas.map(membersCardData => <MembersCards key={membersCardData.id}
                        membersCardData={membersCardData}
                    >

                    </MembersCards>)



                }
            </div>
            <div className=''>
                <Exprience></Exprience>
            </div>
        </div>
    );
};

export default Members;