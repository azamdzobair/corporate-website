import React, { useState } from 'react';
import UseFullLinks from './UseFullLinks';
import Resources from './Resources';
import img from '../../image/img.jpg';
import logo1 from '../../logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube, } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars, faXmark, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Model from '../Model/Model';
import logo from '../../image/logo.png';
import Partner from './Partner';



const Footer = () => {
    const [open, setOpen] = useState(false);
    const Datas = [
        {
            id: 1,
            link: "About us",
            Res: "Attorney",
        },
        {
            id: 1,
            link: "Careers",
            Res: "Practise Areas",
        },
        {
            id: 1,
            link: "News & Articles",
            Res: "Our Services",
        },
        {
            id: 1,
            link: "Help Center",
            Res: "Law Advice",
        },
        {
            id: 1,
            link: "Legal Notice",
            Res: "Parent Community",
        },


    ];

    return (
        <div className='bg-indigo-950  w-full mt-14 md:mt-24 '>
            <div className=' flex justify-center  '>
                <div className='md:flex items-center mx-auto px-6 md:px-24 p-16'>
                    <div className='bg-amber-500 w-80 h-80 p-8 md:mr-14'>
                        <img className='w-24 h-20' src={logo1} />
                        <p className='text-white'>Voluptatum penatibus dis eligendi quasi suscipit voluptas, massa quasi duis elit quas volutpat animi.</p>
                        <div className='text-white mt-4'>
                            <div className='flex items-center mb-1'>
                                <FontAwesomeIcon className='mr-4' icon={faLocationDot} />
                                <p>3557 Derek Drive, Florida</p>

                            </div>
                            <div className='flex items-center mb-1'>
                                <FontAwesomeIcon className='mr-4' icon={faPhone} />
                                <p>+1(456)657-887</p>
                            </div>
                            <div className='flex items-center mb-1'>
                                <FontAwesomeIcon className='mr-4' icon={faEnvelope} />
                                <p>info@domain.com</p>

                            </div>
                        </div>
                    </div>
                    <div className='text-center md:text-left mt-8'>
                        <h1 className='mb-4 text-white text-2xl font-bold'>Usefull Link</h1>
                        <div className=''>
                            {
                                Datas.map(Data => <UseFullLinks key={Data.id} Data={Data}></UseFullLinks>)


                            }
                        </div>



                    </div>
                    <div className=' text-center md:text-left mt-8 md:ml-24'>
                        <h1 className='mb-4 text-white text-2xl font-bold text'>Resources</h1>
                        <div className=''>
                            {
                                Datas.map(Data => <Resources key={Data.id} Data={Data}></Resources>)


                            }

                        </div>
                    </div>
                    <div className='text-center md:text-left mt-8 md:ml-24'>
                        <h1 className='mb-4 text-white text-2xl font-bold'>Subscribe Newsletter</h1>
                        <p className='mb-2 text-white'>Sem quidem convallis ipsa iusto tempore <br /> sapiente, corporis! Sagittis etiam.</p>
                        <input className='mb-2 w-80 h-14' type="email" placeholder="user@eamil" name="usereamil" value=""></input>
                        <p className='mb-2 text-white'>Follow on social media :</p>

                        <div className='flex justify-center '>
                            <div className='bg-amber-500 hover:bg-orange-700 duration-300 ease-in w-8 h-8 rounded-full flex justify-center items-center mr-2 '>
                                <FontAwesomeIcon className='text-white text-1xl' icon={faFacebookF} />
                            </div>
                            <div className='bg-amber-500 hover:bg-orange-700 duration-300 ease-in w-8 h-8 rounded-full flex justify-center items-center mr-2 '>
                                <FontAwesomeIcon className='text-white text-1xl' icon={faTwitter} />
                            </div>
                            <div className='bg-amber-500 hover:bg-orange-700 duration-300 ease-in w-8 h-8 rounded-full flex justify-center items-center mr-2 '>
                                <FontAwesomeIcon className='text-white text-1xl' icon={faInstagram} />
                            </div>
                            <div className='bg-amber-500 hover:bg-orange-700 duration-300 ease-in w-8 h-8 rounded-full flex justify-center items-center '>
                                <FontAwesomeIcon className='text-white text-1xl' icon={faYoutube} />
                            </div>

                        </div>




                    </div>
                </div>

            </div>
            <Partner></Partner>
        </div>
    );
};

export default Footer;