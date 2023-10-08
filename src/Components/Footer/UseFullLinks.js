import React from 'react';

const UseFullLinks = ({ Data }) => {
    return (
        <div>
            <li className='mb-2 text-white list-none'>{Data.link}</li>
        </div>
    );
};

export default UseFullLinks;