import React from 'react';

const BlogCard = ({ BlogCardData }) => {
    return (
        <div className='sm:w-80 md:w-80 mb-10 relative '>
            <div className='relative '>
                <div className='absolute '>
                    <div className='text-center bg-amber-500 w-80 h-80 flex justify-center items-center bg-opacity-0 hover:bg-opacity-70 opacity-0  hover:opacity-100 duration-500 ease-in'>

                        <div className=''>
                            <h1 className='mb-2 text-2xl text-white font-bold'>{BlogCardData.title}
                            </h1>
                            <p className='mb-2 text-white'>{BlogCardData.des}</p>
                            <button className='bg-amber-500 py-2 px-4 text-lg font-medium text-white hover:bg-orange-700 duration-500 ease-in ' >Details</button>
                        </div>
                    </div>
                </div>
                <div className=' w-80 h-80'><img className='mb-4 w-80 h-80' src={BlogCardData.img} /></div>




            </div>

        </div>
    );
};

export default BlogCard;