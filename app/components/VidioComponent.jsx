'use client'
import React from 'react'

const VidioComponent = () => {
  return (
    <div className="mt-10"
    onContextMenu={(e) => e.preventDefault()}>
     <video
       muted
       autoPlay
       loop
       playsInline
       controls
       className="w-full h-[40rem] object-cover"
     >
       <source src="https://res.cloudinary.com/dqxyczrhq/video/upload/v1754034744/vidio_njgszg.mp4" type="video/mp4" />
       Your browser does not support the video tag.
     </video>
   </div>
  )
}

export default VidioComponent