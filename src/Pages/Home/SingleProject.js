import React from 'react';

const SingleProject = ({ project }) => {
    const { name, img } = project;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img}alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <a className='btn btn-primary' href="https://electric-tools-b95b4.web.app/" >Previwe</a>
                    {/* <button  class="btn btn-primary">Previwe</button> */}
                    <button class="btn btn-primary">explore</button>
                  

                </div>
            </div>
        </div>
    );
};

export default SingleProject;