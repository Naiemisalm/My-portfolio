// import React from 'react';
import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';


const Project = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('Project.json')
            .then(res => res.json())
            .then(data => setProjects(data))

    }, [])
    return (
        <div>
            <h1 className='text-center text-3xl font-bold underline'>My <span className='text-amber-600'>Project</span></h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10 ">
                        <img src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t1.15752-9/283717014_1059990828236659_6243709092295769367_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFWlXXDamYbZHZoWXQKP3cb-pmXefW4kn76mZd59biSfuKyx9Drz1KT9Uh0DJK-0pEhQQY1ZkatGdbiega9QUMc&_nc_ohc=gY497mEDuA4AX-f2mTP&_nc_ht=scontent.fcgp27-1.fna&oh=03_AVKrvS52NLMHTLxAg6hqGdL0bREf46uSFkgKl3vygeI_lg&oe=62CA7FB4" alt="Shoes" class="rounded-xl rounded-md duration-200 hover:scale-105" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Elctric Tools</h2>
                        <p>This is my full stock best project . using firebase authentitation, react-router, boostrap etc. </p>
                        <div class="card-actions">
                            <a className='btn btn-primary' href="https://electric-tools-b95b4.web.app/" >Live site</a>
                            {/* <button  class="btn btn-primary">Previwe</button> */}
                            <button class="btn btn-primary">explore</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t1.15752-9/284073208_769429324222404_3453230642414965677_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGDfyixJM58vc4rcKiW6V0ILG2Hi880BgksbYeLzzQGCatZYl3bIuG8zWjVMsyAnT7MLFrrqwizxtNFwGtQAmW_&_nc_ohc=0Ck5g8RSf1EAX_zRKCa&_nc_ht=scontent.fcgp27-1.fna&oh=03_AVIHofeQ0B0ZdL67d-QVzkzTn-84NA736v56hMcZRKxSmQ&oe=62CA95B8" alt="Shoes" class="rounded-xl rounded-md duration-200 hover:scale-105" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Tom Cruse Photographer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <a className='btn btn-primary' href="https://rad-creponne-5e5d4c.netlify.app/services" >Live site</a>

                            <button class="btn btn-primary">explore</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t1.15752-9/280949991_756433045378220_4993867751520559629_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeESgVlp0ap7iCJUIUpp3E7Ovh7LAkGxtnK-HssCQbG2cunggXAgzmkOwanpzztFqoRnV-ULR_vCgRWTpM63NWaO&_nc_ohc=eU2MBBegbesAX8HccLt&_nc_ht=scontent.fcgp27-1.fna&oh=03_AVK2vAAtzfnGinwFfZf50VE7ZyJHFcZ6USNY72QuXQZ_xQ&oe=62CA2621" alt="Shoes" class="rounded-xl rounded-md duration-200 hover:scale-105" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Genius gar service</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <a className='btn btn-primary' href="https://genius-car-services-eb117.firebaseapp.com/" >Live site</a>
                            {/* <button  class="btn btn-primary">Previwe</button> */}
                            <button class="btn btn-primary">explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //     <h1 className='text-center uppercase text-3xl py-6'>this is my project</h1>
        //     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        //         {
        //             projects.map(project=> <SingleProject
        //             key={project.id}
        //             project={project}
        //             ></SingleProject>)
        //         }
        //     </div>
        // </div>
    );
};

export default Project;