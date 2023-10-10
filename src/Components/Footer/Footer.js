import React from 'react';
import UseFullLinks from './UseFullLinks';
import Resources from './Resources';
import img from '../../image/img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

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
        <div >
            <div className='bg-gray-700 w-full  '>
                <div className='flex items-center mx-auto px-24 p-16'>
                    <div className='bg-orange-500 bg-o w-80 h-80 mr-14'>
                        <h1>hello</h1>
                    </div>
                    <div className=''>
                        <h1 className='mb-4 text-white text-2xl font-bold'>Usefull Link</h1>
                        <div className=''>
                            {
                                Datas.map(Data => <UseFullLinks key={Data.id} Data={Data}></UseFullLinks>)


                            }
                        </div>



                    </div>
                    <div className='ml-24'>
                        <h1 className='mb-4 text-white text-2xl font-bold'>Resources</h1>
                        <div className=''>
                            {
                                Datas.map(Data => <Resources key={Data.id} Data={Data}></Resources>)


                            }

                        </div>
                    </div>
                    <div className='ml-24'>
                        <h1 className='mb-4 text-white text-2xl font-bold'>Subscribe Newsletter</h1>
                        <p className='mb-2 text-white'>Sem quidem convallis ipsa iusto tempore <br /> sapiente, corporis! Sagittis etiam.</p>
                        <input className='mb-2 w-80 h-14' type="email" placeholder="user@eamil" name="usereamil" value=""></input>
                        <p className='mb-2 text-white'>Follow on social media :</p>

                        <div className='flex '>
                            <div className='bg-orange-500 hover:bg-orange-700 duration-300 ease-in w-8 h-8 rounded-full flex justify-center items-center mr-2 '>
                                <FontAwesomeIcon className='text-white text-1xl' icon={faFacebookF} />
                            </div>
                            <div className='bg-orange-500 hover:bg-orange-700 duration-300 ease-in w-8 h-8 rounded-full flex justify-center items-center mr-2 '>
                                <FontAwesomeIcon className='text-white text-1xl' icon={faTwitter} />
                            </div>
                            <div className='bg-orange-500 hover:bg-orange-700 duration-300 ease-in w-8 h-8 rounded-full flex justify-center items-center mr-2 '>
                                <FontAwesomeIcon className='text-white text-1xl' icon={faInstagram} />
                            </div>
                            <div className='bg-orange-500 hover:bg-orange-700 duration-300 ease-in w-8 h-8 rounded-full flex justify-center items-center '>
                                <FontAwesomeIcon className='text-white text-1xl' icon={faYoutube} />
                            </div>

                        </div>




                    </div>
                </div>

            </div>
            {/* <div className='mt-20 relative h-[450px]'>

                <div className='w-full h-[450px] bg-black opacity-75 absolute '></div>
                <img className='mr-4 w-full h-full' src={img} />
            </div> */}
            <div className='text-white text-center text-lg  bg-slate-900 w-full'>
                <p >CopyRight@ all right goes here</p>
            </div>


        </div>
    );
};

export default Footer;