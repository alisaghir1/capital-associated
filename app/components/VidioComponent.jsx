'use client'
import React from 'react'

const VidioComponent = () => {
  return (
    <div className="mt-10"
    onContextMenu={(e) => e.preventDefault()}>
     <video
       autoPlay
       loop
       playsInline
       className="w-full h-[40rem] object-cover"
     >
       <source src="/vidio.mp4" type="video/mp4" />
       Your browser does not support the video tag.
     </video>
   </div>
  )
}

export default VidioComponent