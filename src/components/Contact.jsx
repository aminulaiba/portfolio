import React from 'react'

function Contact() {
  return (
    <div className='font-Roboto-Serif grid grid-cols-1 gap-5 xl:grid-cols-2'>
      <div className=''>
          <form action="#" className='flex flex-col gap-7 items-stretch justify-center p-11 bg-accent-bg rounded-xl'>
            <h3 className='text-center text-3xl text-accent'>Let's Collaborate</h3>
            <p>Have a question or interested in working together? Don't hesitate to reach out.</p>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <input className='px-7 h-12 rounded-lg focus:text-accent/60 focus:placeholder:text-text-h placeholder:text-accent/40 outline-none bg-bg' name='firstName' placeholder='First Name' type="text" />
              <input className='px-7 h-12 rounded-lg focus:text-accent/60 focus:placeholder:text-text-h placeholder:text-accent/40 outline-none bg-bg' name='lastName' placeholder='Last Name' type="text" />
              <input className='px-7 h-12 rounded-lg focus:text-accent/60 focus:placeholder:text-text-h placeholder:text-accent/40 outline-none bg-bg' name='email' placeholder='Email' type="email" />
              <input className='px-7 h-12 rounded-lg focus:text-accent/60 focus:placeholder:text-text-h placeholder:text-accent/40 outline-none bg-bg' name='phone' placeholder='Phone Number' type="tel" />
            </div>
            <textarea name="" id="" className='px-7 py-3 rounded-lg min-h-[150px] focus:text-accent/60 focus:placeholder:text-text-h placeholder:text-accent/40 outline-none bg-bg' placeholder='Your Massage'></textarea>
            
            <button className='max-w-25 mx-auto rounded-lg font-semibold bg-[#0cc96aaf] text-text-h
            py-2 px-5' type='submit'>SEND</button>
              
          </form>
      </div>

      <div className='flex'>
        <ul className='flex flex-col gap-5 justify-center items-start my-auto mx-auto md:grid md:grid-cols-2 md:justify-items-start xl:flex'>
          <li className='flex justify-center items-center gap-5 p-3'>
            <div className='flex justify-center items-center p-2 bg-accent-bg text-accent'>
              <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <title xmlns="">phone-bold</title>
                <path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"/>
              </svg>
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='text-base'>Phone Number</h3>
              <h4 className='text-xl text-text-h'>+880 1533 726478</h4>
            </div>
          </li>
          
          <li className='flex justify-center items-center gap-5 p-3'>
            <div className='flex justify-center items-center p-2 bg-accent-bg text-accent'>
              <svg className='w-8 h-8' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                </path>
              </svg>
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='text-base'>Linkdin</h3>
              <h4 className='text-xl text-text-h'>aminulislamai</h4>
            </div>
          </li>
    
          <li className='flex justify-center items-center gap-5 p-3'>
            <div className='flex justify-center items-center p-2 bg-accent-bg text-accent'>
              <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><title xmlns="">mail-32-filled</title>
              <path fill="currentColor" d="M2.004 9.303A4.5 4.5 0 0 1 6.5 5h19a4.5 4.5 0 0 1 4.496 4.303l-1.476.82L16 16.864L3.48 10.123zM2 11.588V22.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V11.588l-.526.293l-13 7a1 1 0 0 1-.948 0L2.514 11.874z"/>
            </svg>
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='text-base'>Email</h3>
              {/* <h4 className='text-xl text-text-h wrap-break-word'>aminul.islam.fpp@gmail.com</h4> */}
              <span className='text-xl text-text-h wrap-break-word min-w-0'>aminul.islam.fpp@gmail.com</span>
            </div>
          </li>

          <li className='flex justify-center items-center gap-5 p-3'>
            <div className='flex justify-center items-center p-2 bg-accent-bg text-accent'>
              <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">location-filled</title>
              <path fill="currentColor" d="M10.115 21.811c.606.5 1.238.957 1.885 1.403a27 27 0 0 0 1.885-1.403a28 28 0 0 0 2.853-2.699C18.782 16.877 21 13.637 21 10a9 9 0 1 0-18 0c0 3.637 2.218 6.876 4.262 9.112a28 28 0 0 0 2.853 2.7M12 13.25a3.25 3.25 0 1 1 0-6.5a3.25 3.25 0 0 1 0 6.5"/>
              </svg>
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='text-base'>Location</h3>
              <h4 className='text-xl text-text-h'>Barishal Sador, Bangladesh</h4>
            </div>
          </li>
          
          
          
        </ul>
      </div>

    </div>
  )
}

export default Contact