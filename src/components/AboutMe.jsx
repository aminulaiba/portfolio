import React from 'react'

function AboutMe() {
  return (
    <div >
        <h1 className='text-3xl my-5 text-center'>About Me</h1>
        <p className='text-justify'>
            A Full-Stack Developer, building scalable, production-ready web applications from frontend to deployment. I have gained valuable hands-on experience through my academic and personal projects, including web development and data scraping. Currently, I'm strengthening my backend architecture and system design skills while preparing for studies in Artificial Intelligence. My long-term goal is to build intelligent, scalable systems that solve real-world problems.
        </p>
        <div className='text-accent w-full my-9'>
                <ul className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                    <a href="#">
                        <li className='flex justify-center md:justify-start items-center gap-3 py-1 min-w-0'>
                            <div className='rounded-full'>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                                    </path>
                                </svg>
                            </div>
                            <span className='wrap-break-word min-w-0'>Aminul Islam</span>
                        </li>
                    </a>
                    
                    <a href="#">
                        <li className='flex justify-center md:justify-start items-center gap-3 py-1 min-w-0'>
                            <div className='rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><title xmlns="">mail-32-filled</title>
                                <path fill="currentColor" d="M2.004 9.303A4.5 4.5 0 0 1 6.5 5h19a4.5 4.5 0 0 1 4.496 4.303l-1.476.82L16 16.864L3.48 10.123zM2 11.588V22.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V11.588l-.526.293l-13 7a1 1 0 0 1-.948 0L2.514 11.874z"/>
                                </svg>
                            </div>
                            <span className='wrap-break-word min-w-0'>aminul.islam.aiba113@gmail.com</span>
                        </li>
                    </a>
                    
                    <a href="#">
                        <li className='flex justify-center md:justify-start items-center gap-3 py-1 min-w-0'>
                            <div className='rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">location-filled</title>
                                <path fill="currentColor" d="M10.115 21.811c.606.5 1.238.957 1.885 1.403a27 27 0 0 0 1.885-1.403a28 28 0 0 0 2.853-2.699C18.782 16.877 21 13.637 21 10a9 9 0 1 0-18 0c0 3.637 2.218 6.876 4.262 9.112a28 28 0 0 0 2.853 2.7M12 13.25a3.25 3.25 0 1 1 0-6.5a3.25 3.25 0 0 1 0 6.5"/>
                                </svg>
                            </div>
                            <span className='wrap-break-word min-w-0'>Barishal Sador, Bangladesh</span>
                        </li>
                    </a>
                    
                    <a href="#">
                        <li className='flex justify-center md:justify-start items-center gap-3 py-1 min-w-0'>
                            <div className='rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">phone-bold</title><path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"/></svg>
                            </div>
                            <span className='wrap-break-word min-w-0'>+880 1533 726478</span>
                        </li>
                    </a>
                    
                    <a href="#">
                        <li className='flex justify-center md:justify-start items-center gap-3 py-1 min-w-0'>
                            <div className='rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">baseline-language</title>
                                <path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A8 8 0 0 1 5.08 16m2.95-8H5.08a8 8 0 0 1 4.33-3.56A15.7 15.7 0 0 0 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"/>
                                </svg>
                            </div>
                            <span className='wrap-break-word min-w-0'>Bangla, English, Hindi/Urdu</span>
                        </li>
                    </a>
                </ul>
        </div>
    </div>
  )
}

export default AboutMe