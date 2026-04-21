import React from 'react'
import { projects } from '../data/data'
import { useState } from 'react'
import { SiGithub } from "react-icons/si";
import { IoMdLink } from "react-icons/io";

function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const projectsLenth = projects.length;

  const [selected, setSelected] = useState(project.media[0])

  return (
    <div className='flex flex-col gap-5 justify-center bg-accent-bg p-5 font-Roboto-Serif'>

      <div className='flex flex-col justify-center items-stretch md:flex-row gap-5'>
        <div className='w-full order-2 md:order-0 flex flex-col'>
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

        {/* video div */}
        <div className='w-full'>
          {/* main display div */}
          <div className='w-full aspect-video overflow-hidden rounded-lg bg-black mb-3'>
            {selected.type === 'video'?(
              <video
              src={selected.src}
              // autoPlay
              loop
              muted
              />
            ):(
              <img src={selected.src} alt="" />
            )}
          </div>
          
          {/* ss preview */}
          <div className='flex justify-center items-center gap-2.5'>
            {project.media.map((item, indx)=>(
              // logic for img and vid
              item.type=="image"?(
                <img key={indx} onClick={()=> setSelected(item)} src={item.src} alt="" className={`w-15 h-15 object-cover border rounded-md ${selected.src==item.src?'border-3':''}`}/>
              ):(
                <img key={indx} onClick={()=> setSelected(item)} src={item.thumbnail} alt="" className={`w-15 h-15 object-cover border rounded-md ${selected.src==item.src?'border-3':''}`}/>
                
              )

            ))}
          </div>

        </div>

      </div>

        <div className='order-3 flex justify-between items-center'>

          <span className='shadow-[1px_1px_5px_rgb(var(--accent-shadow),0.4)] py-1 px-3 rounded-lg'>{index+1}</span>

          <div className='flex gap-2'>
            <button onClick={()=> {setIndex(index-1); setSelected(project.media[0])}} disabled={index==0} className='w-9 h-9 border border-accent text-accent enabled:hover:border-accent enabled:hover:bg-accent enabled:hover:text-bg rounded-full transition-all duration-400 disabled:opacity-40'>←</button>

            <button onClick={()=> {setIndex(index+1); setSelected(project.media[0])}} disabled={index==projectsLenth-1} className='w-9 h-9 border border-accent text-accent enabled:hover:border-accent enabled:hover:bg-accent enabled:hover:text-bg rounded-full transition-all duration-400 disabled:opacity-40'>→</button>
          </div>
        </div>
    </div>
  )
}

export default Projects
