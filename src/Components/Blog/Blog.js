import React from 'react';
import BlogCard from './BlogCard';
import Quote from '../Quote/Quote';




const Blog = () => {

    // BlogCardDatas

    const BlogCardDatas = [
        {
            id: 1,
            img: '../../img/img11.jpg',
            title: "Govt Certified",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            id: 2,
            img: 'img/img12.jpg',
            title: "Exper Counsellor",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
            id: 3,
            img: 'img/img13.jpg',
            title: "Affordable Price",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },

    ];
    return (
        <div className='mt-24'>
            <div className='mx-auto px-24'>
                <div>
                    <h1 className='text-gray-800 text-4xl text-center font-bold mb-5'>Introduction About Our Blog </h1>
                    <p className='text-gray-800 text-center mx-60'>Aenean purus esse habitant facilisi rhoncus metus aut sodales voluptas veniam aute, incidunt semper iusto? Praesent! Lobortis? Tellus ipsa. Laborum. Platea, nec! Ullam repellat aenean feugiat, tempor.</p>
                </div>

                <div className=' flex justify-between my-16 '>

                    {
                        BlogCardDatas.map(BlogCardData => <BlogCard key={BlogCardData.id} BlogCardData={BlogCardData}></BlogCard>)

                    }

                </div>
            </div>

            <Quote></Quote>

        </div>
    );
};

export default Blog;