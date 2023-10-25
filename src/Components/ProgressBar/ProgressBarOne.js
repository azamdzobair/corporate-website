import React, { useEffect, useState } from 'react';

const ProgressBarOne = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setProgress((val) => val + 1);
        }, 100);
    }, []);

    const [percent, setPercent] = useState(0);
    useEffect(() => {
        if (percent < 100) {
            setTimeout(() => setPercent(newval => newval + 1), 200);
        }

    }, [percent]);

    return (
        <div>
            <div class="relative h-[200px] w-[200px] rounded-full flex items-center justify-center before:content-[''] before:absolute before:h-[160px] before:w-[160px] before:bg-white before:rounded-[50%]" style={{ background: `conic-gradient(#ff5841 ${percent}%, #ededed 0deg)` }}>
                <h1 className='text-red-500 text-5xl font-bold z-10'>{percent}%</h1>
                {/* <span class="relative text-3xl font-bold text-gray-800" x-text="currentDateTime.getSeconds() < 10 ? '0' + currentDateTime.getSeconds() : currentDateTime.getSeconds()"></span>
                <span class="absolute -bottom-10">Seconds</span> */}
            </div>
            {/* <div className='w-72 h-72 bg-amber-500 flex items-center justify-center'>
                <div className='fill-none border-[30px] border-white w-60 h-60 rounded-full transition-all flex items-center justify-center  ' style={{ border: `${percent}%` }}>
                    <h1 className='text-white text-5xl font-bold'>{percent}%</h1>
                </div>
            </div> */}
            {/* <div className='' > {percent} % </div> */}
        </div>

    );
};

export default ProgressBarOne;