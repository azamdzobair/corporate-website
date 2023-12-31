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
            <div class="relative h-[200px] w-[200px] rounded-full flex items-center justify-center before:content-[''] before:absolute before:h-[160px] before:w-[160px] before:bg-white before:rounded-[50%]" style={{ background: `conic-gradient(#FFC107 ${percent}%, #ededed 0deg)` }}>
                <h1 className='text-amber-500 text-5xl font-bold z-10'>{percent}%</h1>
            </div>
        </div>

    );
};

export default ProgressBarOne;