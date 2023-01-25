import React from 'react'
import data from '../Data'
import {motion} from "framer-motion"
const IconBox = () => {
  const iconData = data; 

  return (
      <div className='flex justify-around text-white columns-3'>
            {iconData.map((icon) => (
                  <div key={icon.id} className='flex flex-col-reverse justify-center items-center bg-black bg-opacity-50 p-10 mx-3'>
                        <h1 className='pt-2'>{icon.name}</h1>
                        <img src={icon.icon} className='w-10 h-10' />
                  </div>
            ))}
      </div>
  )
}

export default IconBox