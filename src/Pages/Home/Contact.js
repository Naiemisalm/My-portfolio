import React from 'react';
import emailjs from 'emailjs-com'
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';


const Contact = () => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm()
    }
    return (
       <div>
         <form className=' px-96' onSubmit={sendEmail}>
            <div className='justify-center bg'>
                <div>
                    <h1  className='text-center uppercase text-3xl py-5 text-amber-600'> contact me</h1>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Enter your name" class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Enter your email" class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Message</span>
                    </label>
                    <textarea type="message" placeholder=" Eenter your message" class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full max-w-xs">

                    <input type="submit" value="send" class="input input-bordered w-full mt-5 btn btn-primary" />
                </div>

            </div>
        </form>
        <div className='px-96 py-10 inline-flex'>
            <a className='max-h-10 w-16 '  href="https://web.facebook.com/profile.php?id=100012267494575"> <FaFacebookF /></a>
            <a className='h-16 w-16' href="https://www.linkedin.com/in/nayem-islam-34a1221b4/"> <FaLinkedin /></a>
            <a className='h-16 w-16' href="https://github.com/Naiemisalm?tab=repositories"> <FaGithub /></a>
        
        </div>
       </div>
    );
};

export default Contact;