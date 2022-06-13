import React from 'react';
import emailjs from 'emailjs-com'
import { contact } from '../../data';



const Contact = () => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm()
    }
    return (
        <section className='bg-black mt-10' id='contact'>
          <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
              <h2 className='text-3xl text-center py-6 underline'> Contact me </h2>
            </div>
            <div
              className='flex flex-col lg:gap-x-8 lg:flex-row'
            >
              <div
                className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
              >
                {contact.map((item, index) => {
                  const { icon, title, subtitle, description } = item;
                  return (
                    <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                      <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                        {icon}
                      </div>
                      <div>
                        <h4 className='font-body text-xl mb-1'>{title}</h4>
                        <p className='mb-1 text-paragraph'>{subtitle}</p>
                        <p className='text-accent font-normal '>{description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <form
                className='space-y-8 w-full max-w-[780px]'
              >
                <div className=' gap-8 inline-grid grid-cols-3 gap-4"'>
                  <input className='input' type='text' placeholder='Your name' />
                  <input className='input' type='email' placeholder='Your email' /> <br />
                </div>
                <input className='input' type='text' placeholder='Subject' /><br />
                <textarea
                  className='textarea'
                  placeholder='Your message'
                ></textarea> <br />
                <button className='btn btn-lg bg-accent hover:bg-secondary-hover'>
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      );
    };

export default Contact;