import React from 'react'
import { projects } from '../data/data'
import { useState } from 'react'
import { SiGithub } from "react-icons/si";
import { IoMdLink } from "react-icons/io";

function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  return (
    <div className='flex flex-col gap-5 justify-center bg-accent-bg p-5 font-Roboto-Serif'>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-full'>
          <h1 className='text-3xl my-3'>{ project.title }</h1>
          <p className='text-justify my-4'>
            { project.description }
          </p>

          {/* tech stack showing */}
          <div className='flex flex-wrap justify-center items-center xs:justify-start gap-2 my-3'>
            {project.techStacks.map((tech, indx)=>(
              <span key={indx} className='min-w-22 border border-accent text-center p-1'>{tech}</span>
            ))}
          </div>
          <hr />
          <div className='flex justify-start items-center gap-2 text-accent my-3'>
            <SiGithub className='w-5 h-5'/> 
            {project.live?<a href={project.live} target='blank'><IoMdLink className='w-5 h-5'/></a>:""}
          </div>
        </div>

        <div className='bor my-5'>
          <div>
            <video src=""></video>
          </div>
          <div>
            image
          </div>

        </div>

      </div>

        <div className='bor order-3'>
          numbering count
        </div>
    </div>
  )
}

export default Projects