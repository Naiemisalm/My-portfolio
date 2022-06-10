// import React from 'react';
import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';


const Project = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch('Project.json')
        .then(res=>res.json())
        .then(data=> setProjects(data))

    },[])
    return (
        <div>
            <h1 className='text-center uppercase text-3xl py-6'>this is my project</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    projects.map(project=> <SingleProject
                    key={project.id}
                    project={project}
                    ></SingleProject>)
                }
            </div>
        </div>
    );
};

export default Project;