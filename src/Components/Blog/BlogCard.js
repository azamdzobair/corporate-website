import React from 'react';

const BlogCard = ({ BlogCardData }) => {
    return (
        <div>
            <img src={BlogCardData.img} />
            <h1>{BlogCardData.title}</h1>
            <p>{BlogCardData.des}</p>
        </div>
    );
};

export default BlogCard;