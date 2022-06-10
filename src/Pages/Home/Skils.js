import React from 'react';

const Skils = () => {
    return (
        <div className='my-10'>
            <h1 className='text-3xl font-serif font-bold text-center underline py-5 cursor-pointer'> <span className='text-amber-600'>My</span> Skills</h1>

            <div className='bg-yellow-100'>
                <h3 className='text-black text-2xl font-bold px-5 py-5'>HTML 85%</h3>
                <progress class="progress progress-primary w-86 px-5" value="70" max="80"></progress>

                <h3 className='text-black text-2xl font-bold px-5 mt-5'>CSS 80%</h3>
                <progress class="progress progress-primary w-85 px-5" value="70" max="100"></progress>

                <h3 className='text-black text-2xl font-bold px-5 mt-5'>REACT.JS 90%</h3>
                <progress class="progress progress-primary w-83 px-5" value="80" max="90"></progress>

                <h3 className='text-black text-2xl font-bold px-5 mt-5'>NODE.JS 75%</h3>
                <progress class="progress progress-primary w-76 px-5" value="60" max="80"></progress>

                <h3 className='text-black text-2xl font-bold px-5 mt-5'>JAVASCRIPT 90%</h3>
                <progress class="progress progress-primary w-76 px-5 mb-5" value="80" max="90"></progress>

            </div>

        </div>
    );
};

export default Skils;