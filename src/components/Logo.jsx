import React from 'react'
import { useState } from 'react'

function Logo({name}) {
  const names = name.split(" ");
  
  const toggleAccent = ()=>{
    const root = document.documentElement;
    const current = root.getAttribute("data-accent");
    const next = current==="green" ? null : "green"; 
    //checking is there any data-accent attribute. if null then setting green as next. and if green then setting null sothat the default one works.

    if(next){
      root.setAttribute("data-accent", next);
    } else{
      root.removeAttribute("data-accent");
    }


  };

  return (
    <div onClick={toggleAccent} className='cursor-pointer'>
      <svg width="100%" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className=''>
        <defs>
            <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Great+Vibes&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
            .logo-serif  { font-family: 'Texturina', serif; font-weight: 400; }
            .logo-script { font-family: 'Dancing Script', cursive; font-weight: 400; }
            `}</style>
        </defs>

        <text className="logo-serif" x="80"  y="370" fontSize="320" style={{ fill: "var(--accent-light)" }} letterSpacing="-4">{names[0][0]+names[1][0]}</text>

        <text className="logo-script" x="90"  y="305" fontSize="115" style={{ fill: "var(--accent-deep)" }} transform="rotate(-13, 58, 265)">{names[0]}</text>
        <text className="logo-script" x="200" y="338" fontSize="115" style={{ fill: "var(--accent-deep)" }} transform="rotate(-13, 258, 368)">{names[1]}</text>
        <circle
          className="dash-animate"
          cx="250"
          cy="250"
          r="245"
          fill='none'
          // stroke="#B68D40"
          stroke='var(--accent-deep)'
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round">
        </circle>
      </svg>
    </div>
  )
}

export default Logo