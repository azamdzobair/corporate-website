import React from 'react';

const BlogCard = ({ BlogCardData }) => {
    return (
        <div className='mr-6 w-80 mb-10'>
            <div>
                <img className='mb-4' src={BlogCardData.img} />

                <button>Details
                </button>

            </div>
            <h1 className='mb-2 text-2xl'>{BlogCardData.title}</h1>
            <p>{BlogCardData.des}</p>
        </div>
    );
};

export default BlogCard;