import React from 'react';


const BannerHeaderCard = ({ item: { title, des, icon } }) => {
    return (


        <div className=" mr-4 mb-4 bg-white hover:bg-amber-600 duration-500 ease-in p-8 text-center">
            <h2 className="mb-2 text-2xl font-bold">
                {title}

            </h2>
            <span className="text-6xl  ">{icon}</span>
            <p className="mt-2">{des}</p>
            <span className="">

            </span>
        </div>

    );
};

export default BannerHeaderCard;

