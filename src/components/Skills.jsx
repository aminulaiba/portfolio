import React from 'react'
import { skillGroups } from '../data/data'
import Cent from './Cent'

function Skills() {
  const Icon = skillGroups[0].skills[0].logo;
  return (
    <div>
      <h3 className='text-3xl my-5 text-center'>My Skills</h3>
      <p className='text-ju'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae nihil cumque excepturi dolorem odit hic consectetur placeat, dicta assumenda asperiores velit laboriosam. Sunt necessitatibus rem maxime obcaecati architecto magni.
      </p>
      {/* <section className='my-7'>
        {skillGroups.map((group, i) => (
          <div key={i} className='pb-5'>
            <h3 className=''>{group.title}</h3>
            
            <ul className='grid grid-cols-3 gap-5 w-fit mx-auto min text-accent py-3'>
              {group.skills.map((skill, indx)=>{
                const Icon = skill.logo;
                return (
                    <li key={indx} className='min-w-[130px] min-h-[130px] p-3 bg-accent-bg rounded-lg'>
                      <Icon className='w-full h-full'/>
                    </li>
                )
              })}
            </ul>
          </div>
        ))}
      </section> */}
      <section className='px-5 py-9 my-5 bg-accent-bg rounded-md'>
        <ul className='grid grid-cols-[repeat(auto-fit,minmax(100px,max-content))] justify-center gap-5 text-accent'>
          {
            skillGroups.map((group)=>(
              group.skills.map((skill, indx)=>{
                const Icon = skill.logo;
                return(
                  <li key={indx} className='relative flex justify-center items-center max-w-27 max-h-27 p-3 border-2 border-accent rounded-lg group'>
                    <Icon className='w-full h-full'/>
                    <span className='absolute inset-0 bg-white/10 backdrop-blur-sm rounded-md  shadow-md flex justify-center items-center text-center text-sm text-text-h opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'>{skill.name}</span>
                  </li>
                )
              })
            ))
          }
        </ul>
      </section>
    </div>
  )
}

export default Skills