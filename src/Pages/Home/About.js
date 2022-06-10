import React from 'react';
import Skils from './Skils';

const About = () => {
    return (
  <div className=''>
      <h3 className='text-3xl text-center font-serif mt-5 uppercase underline cursor-pointer '>About <span className='text-amber-600'>me</span></h3>
            <div class="card w-100 bg-base-100 shadow-xl ">
        <figure class="px-10 pt-10">
          <img class="mask mask-circle" src="https://scontent.fjsr1-1.fna.fbcdn.net/v/t1.15752-9/285812378_1963433863848938_9140362371945897708_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeERH2lxOWcps8xSL-MW56Tbgk_jZ7TLU3KCT-NntMtTcs8q280MIrK0QcGlR3k-ZzOQ-VStpSdVjXnzJPvgSoaM&_nc_ohc=1H_f-fySX3UAX_KZzu4&_nc_ht=scontent.fjsr1-1.fna&oh=03_AVJx1xfm7m67dZNlGW4pL8G5YHbRvBmPgcgx0m8SemuZEA&oe=62C8A2F3" alt="" height="300"   width="300"/>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-serif font-4xl">I am <span className='text-amber-600'>Naiem Islam Redoy</span></h2>
          <p className='text-xl font-serif'>My name is Naiem islam Redoy and I am from Pabna, Rajshahi, Bangladesh. I recently Completed my Diplom. in Computer Science and Engineering from Pabna Polytechnic Institute Pabna. I am very much passionate about coding and exploring different technologies. I recently learned Full Stack web development and have completed some large projects by myself. I feel confident about myself because I have the ability to adapt into different situations very fast.</p>
        </div>
      </div>
      <Skils></Skils>
  </div>
    );
};

export default About;