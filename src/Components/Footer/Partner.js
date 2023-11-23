import React, { useEffect, useState } from 'react';

const Partner = () => {
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
            <div className='mt-20 bg-red-700 w-full h-96 flex justify-center text-5xl p-10 text-white font-bold'>
                <h1 className='p-10'>{percent}</h1>
                <h1 className='p-10'>0</h1>
                <h1 className='p-10'>0</h1>
                <h1 className='p-10'>0</h1>
                <h1 className='p-10'>0</h1>
            </div>
        </div>
    );
};

export default Partner;