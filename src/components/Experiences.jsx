import React from 'react'

function Experiences() {
  return (
    <div>
        <h1 className='text-3xl my-5 text-center'>Experiences</h1>
        <p className='text-justify'>
            As a Teacher Trainer for the Sheikh Russel Digital Lab (Phase 2) project, I played a key role in the national initiative to establish digital labs across Bangladesh. I led intensive training sessions for educators, focusing on ICT literacy, digital pedagogy, and lab management. By equipping teachers with the skills to navigate the 4th Industrial Revolution (4IR), I helped bridge the digital divide and foster a technology-driven learning environment for the next generation.            
        </p>

        <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 mt-9'>
          <div className='flex flex-col gap-3 items-center justify-center px-3 py-5 text-center bg-accent-bg rounded-lg text-xs'>
            <span className='text-accent'>July - Septembar 2023</span>
            <h3 className='text-base text-text-h'>
                ICT Trainer (Teacher Training) - SRDL Phase 2
            </h3>
            <ul className='list-disc list-inside text-center marker:text-accent'>
              <li>Department of ICT (DoICT), ICT Division, Bangladesh</li>
            </ul>
          </div>
          

        </div>
    </div>
  )
}

export default Experiences