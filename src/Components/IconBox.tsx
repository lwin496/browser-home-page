import React from 'react'
import data from '../Data'
import {motion} from "framer-motion"
const IconBox = () => {
  const iconData = data; 

  return (
      <div className='flex justify-around text-white columns-3'>
            {iconData.map((icon) => (
                  <div key={icon.id} className=''>
                        <a href={icon.url} className='flex flex-col-reverse justify-center items-center bg-black bg-opacity-50 h-[12rem] w-[12rem] mx-3'>
                              <motion.div
                                    animate={{x:200}}
                              />
                              <h1 className='pt-2'>{icon.name}</h1>
                              <img src={icon.icon} className='w-10 h-10' />
                        </a>
                  </div>
            ))}
      </div>
  )
}

export default IconBox