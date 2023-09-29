import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
const ShowModel = ({ closeModel }) => {
    return (
        <div className='w-full h-full fixed duration-500 ease-in right-0 top-0 overflow-hidden flex items-center justify-end  bg-black bg-opacity-50   z-10'>
            <div className='bg-orange-500  relative p-4 top-28 w-80 h-full overflow-x-hidden  '>
                <div onClick={closeModel}>
                    <FontAwesomeIcon icon={faXmark} className='w-7 h-7' />
                </div>
                <div >

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </div>

            </div>

        </div>
        // transition-duration: 1s;
        // transition-timing-function: ease;
        // transition-delay: 0s;
        // transition-property: all;

        // .sidebar-section {
        //     width: 0%;
        //     height: 100%;
        //     position: fixed;
        //     z-index: 99999;
        //     right: 0;
        //     top: 0;
        //     background-color: rgba(0, 0, 0, 0.1);
        //     overflow: hidden;
        //     transition: 1s;
        //     display: flex;
        //     align-items: center;
        //     justify-content: flex-end;
        //     cursor: url(assets/img/cross.png), default;

        //    .sidebar-content {
        //     cursor: auto;
        //     width: 360px;
        //     height: 100%;
        //     overflow-x: hidden;
        //     background-color: #ffffff;
        //     padding: 20px;
        //     opacity: 0;
        //     position: relative;
        //     top: 100px;
        //     transition: all 1s;

    );
};

export default ShowModel;