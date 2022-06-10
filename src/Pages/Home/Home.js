
import React from 'react';
import About from './About';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <div>

                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        {/* <img src="https://st2.depositphotos.com/3369547/8161/v/950/depositphotos_81611512-stock-illustration-web-developer-design.jpg" alt=''width="400" height="500" /> */}
                        <img class="mask mask-decagon" src="https://st2.depositphotos.com/3369547/8161/v/950/depositphotos_81611512-stock-illustration-web-developer-design.jpg" alt='' width="400" height="500" />
                        <div>
                            <h1 className='text-2xl '> <span className='text-amber-600'>HI</span> THERE</h1>
                            <h1 class="text-5xl font-bold">I am Web Developer</h1>
                            <p class="py-6 text-2xl">I’m a Front-end developer specializing in building better UX/UI concepts. Currently, I’m focused on learning full-stack web development.</p>
                            <button class="btn btn-primary">Hire Me</button>
                        </div>
                    </div>
                </div>
            </div>
            <Service></Service>
            <About></About>
        </div>
    );
};

export default Home;