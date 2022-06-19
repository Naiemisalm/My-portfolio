
import React from 'react';

const Service = () => {
    return (
        <div>
            <h3 className='text-3xl text-center font-serif mt-5 uppercase underline cursor-pointer'>Exper<span className='text-4xl text-green-500'>i</span>ence</h3>
            <p className='text-center '>These are the technologies I've worked with</p>

            <div className='py-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8'>

                <div class="card w-66 bg-base-100 rounded-md duration-200 hover:scale-105 shadow-lg shadow-orange-500/20" data-aos="zoom-out-up">
                    <figure class="px-10 pt-10">
                        <img src="https://www.seansimms.com/static/media/html.2ba4fabc69a89a8f71e6.png" alt="" width="80" height="80" class="rounded-xl rounded-md duration-200 hover:scale-105" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">HTML</h2>

                    </div>
                </div>

                <div data-aos="zoom-out-up" class="card w-66 bg-base-100 rounded-md duration-200 hover:scale-105 shadow-xl shadow-lg   shadow-cyan-500/20">
                    <figure class="px-10 pt-10">
                        <img src="https://www.elliott-k.com/static/media/css.69a82c2d9e45c933a9cb.png" alt=""width="80" height="80" class="rounded-2xl rounded-md duration-200 hover:scale-105" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title"> CSS</h2>

                    </div>
                </div>

                <div data-aos="zoom-out-up" class="card w-66 bg-base-100 rounded-md duration-200 hover:scale-105 shadow-xl shadow-lg   shadow-yellow-500/20 ">
                    <figure class="px-10 pt-10">
                        <img src="https://www.elliott-k.com/static/media/javascript.1ccd6ef9bb1f9c84ef00.png" alt=" " width="80" height="80" class="rounded-xl rounded-md duration-200 hover:scale-105" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">JAVASCRIPT</h2>

                    </div>
                </div>

                <div data-aos="zoom-out-up" class="card w-66 bg-base-100 rounded-md duration-200 hover:scale-105 rounded-md duration-200 hover:scale-105 shadow-xl shadow-lg   shadow-cyan-500/20">
                    <figure class="px-10 pt-10">
                        <img src="https://tanver-portfolio.netlify.app/static/media/react.0cf951a69d8e58f83f9d.png" alt=" " width="80" height="80" class="rounded-xl rounded-md duration-200 hover:scale-105" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">REACT.JS</h2>

                    </div>
                </div>

                <div data-aos="zoom-out-up" class="card w-66 bg-base-100 rounded-md duration-200 hover:scale-105 shadow-xl shadow-lg   shadow-emerald-500/20">
                    <figure class="px-10 pt-10">
                        <img src="https://www.elliott-k.com/static/media/tailwind.e47ac876b8d4d0bba47a.png" alt=" " width="80" height="80" class="rounded-xl rounded-md duration-200 hover:scale-105" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title uppercase">Tailwind</h2>

                    </div>
                </div>

                <div data-aos="zoom-out-up" class="card w-66 bg-base-100 rounded-md duration-200 hover:scale-105 shadow-xl shadow-lg   shadow-green-600/20">
                    <figure class="px-10 pt-10">
                        <img src="https://main.tom-portfolio.com/static/media/node.952a9ea986dcfa5229ad.png" alt=" "width="80" height="80" class="rounded-xl rounded-md duration-200 hover:scale-105" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">NODE.JS</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;

