import React from 'react'

function Education() {
  return (
    <div>
        <h1 className='text-3xl my-5 text-center'>Education</h1>
        <p className='text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consequatur, culpa aliquam eaque voluptatem sed voluptas iste alias expedita provident dignissimos eos ab, ipsum id ullam? Amet, autem corporis! Dicta eaque nobis accusamus impedit suscipit! Quidem in temporibus itaque error quis, iusto iure necessitatibus sit repellat id dicta? Consequuntur, laboriosam.
        </p>

        <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 my-9'>
          <div className='flex flex-col gap-3 items-center justify-center px-3 py-5 text-center bg-accent-bg rounded-lg text-xs'>
            <span className='w-full text-end'>2019 - 2023</span>
            <h3 className='text-base text-text-h'>Bachelor of Science in Computer Science and Engineering</h3>
            <ul className='list-disc'>
              <li>University of Global Village</li>
            </ul>
          </div>
          
          <div className='flex flex-col gap-3 items-center justify-center px-3 py-5 text-center bg-accent-bg rounded-lg text-xs'>
            <span className='w-full text-end'>2019 - 2023</span>
            <h3 className='text-base text-text-h'>Bachelor of Science in Computer Science and Engineering</h3>
            <ul className='list-disc'>
              <li>University of Global Village</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Education