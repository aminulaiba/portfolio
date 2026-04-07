import React from 'react'

function Certificates() {
  return (
    <div>
        <h1 className='text-3xl my-5 text-center'>Certificates</h1>
        <p className='text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, tempora cumque debitis quod eius temporibus.
        </p>

        <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 mt-9'>
          <div className='flex flex-col gap-3 items-center justify-center px-3 pt-5 pb-1 text-center bg-accent-bg rounded-lg text-xs'>
            <span className='text-accent'>October - 2020</span>
            <h3 className='text-base text-text-h'>
                Programming for Everybody (Getting Started with Python)
            </h3>
            <ul className='list-disc list-inside text-center marker:text-accent'>
              <li>University of Michigan - Coursera</li>
            </ul>

            <div className='flex justify-end w-full text-base text-accent mt-3'>
                <a href="https://www.coursera.org/account/accomplishments/verify/VVHPWRV9VXJL" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <title xmlns="">link</title>
                        <path fill="currentColor" d="M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"/>
                    </svg>
                </a>
            </div>
          </div>
          

        </div>
    </div>
  )
}

export default Certificates