import React from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm()
    }
    return (
        <form onSubmit={sendEmail}>
            <div className='justify-center'>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">name</span>
                    </label>
                    <input type="text" placeholder="name" class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">email</span>
                    </label>
                    <input type="email" placeholder="email" class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">message</span>
                    </label>
                    <textarea type="message" placeholder="message" class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full max-w-xs">

                    <input type="submit" value="send" class="input input-bordered w-full mt-5 btn btn-primary" />
                </div>

            </div>
        </form>
    );
};

export default Contact;