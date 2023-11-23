import React from 'react';


const BannerHeaderCard = ({ item: { title, des, icon } }) => {
    return (


        <div className="mb-4 bg-white hover:bg-amber-600 duration-500 ease-in p-4 text-center sm:ml-4 first-of-type:ml-0 md:ml-4 ">
            <h2 className="mb-2 text-1xl text-gray-800 font-bold sm:text-2xl md:text-2xl">
                {title}

            </h2>
            <span className="text-6xl">{icon}</span>
            <p className="mt-2">{des}</p>
            <span className="">

            </span>
        </div>

    );
};

export default BannerHeaderCard;

