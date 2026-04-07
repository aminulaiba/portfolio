import React from 'react'

function TestLogo() {
  return (
    <>
    <div className='h-96 w-96 bg-amber-100 rounded-full'>
      <div className="texturina-regular relative h-full rounded-full flex flex-col items-center justify-center p-5 @container"> 
        {/* cqmin stands for 'container query minimum' (width or height, whichever is smaller) */}
        <h1 className="text-[80cqmin] mb-[23cqmin] text-[#d5f2eb]">
          AI
        </h1> 
        {/* <div className='absolute dancingfont text-[30cqmin] z-30 text-gray-600'>
          <p className='relative top-0 left-0 text-green-200'>Aminul</p>
          <p className='relative -bottom-10 -right-10'>Islam</p>
        </div> */}
        <div className='w-full h-full absolute dancingfont text-[30cqmin] z-30 text-[#338079]'>
          <div className='relative top-0 -rotate-12 w-full h-full flex flex-col justify-center items-center'>
            <p className='absolute left-[15cqmin] top-[45cqmin]'>Aminul</p>
            <p className='absolute right-[9cqmin] bottom-[40cqmin]'>Islam</p>
          </div>
        </div>
      </div>
    </div>   
    </>
  )
}

export default TestLogo