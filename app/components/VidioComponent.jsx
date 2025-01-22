'use client'
import React from 'react'

const VidioComponent = () => {
  return (
    <div className="mt-10"
    onContextMenu={(e) => e.preventDefault()}>
     <video
       autoPlay
       loop
       muted
       playsInline
       className="w-full h-full object-cover"
     >
       <source src="/vidio.mp4" type="video/mp4" />
       Your browser does not support the video tag.
     </video>
     <div className="absolute inset-x-0 bottom-0 h-1/3  bg-gradient-to-b from-transparent via-transparent to-black-heavy" />
   </div>
  )
}

export default VidioComponent