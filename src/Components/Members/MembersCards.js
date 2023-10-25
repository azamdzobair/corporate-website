import React from 'react';

const MembersCards = ({ membersCardData }) => {
    return (
        <div>
            <div className='w-80  grayscale hover:grayscale-0 duration-200 ease-in   transform transition-all hover:scale-110 ' >
                <img className='' src={membersCardData.img} />

                {/* <h1 className='text-lg font-bold text-gray-800 my-2'>{cardData.title}</h1>
                <p className=' text-gray-800'>{cardData.des}</p> */}

            </div>
        </div>
    );
};

export default MembersCards;