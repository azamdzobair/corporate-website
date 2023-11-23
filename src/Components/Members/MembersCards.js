import React from 'react';

const MembersCards = ({ membersCardData }) => {
    return (
        <div>
            <div className='w-80  grayscale hover:grayscale-0 duration-200 ease-in   transform transition-all hover:scale-110 ' >
                <img className='' src={membersCardData.img} />



            </div>
        </div>
    );
};

export default MembersCards;