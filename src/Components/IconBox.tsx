import React from 'react'
import {data1, data2} from '../Data'
import {motion} from "framer-motion"
const IconBox = () => {

  const mediaData = data1; 
  const productivityData = data2; 

  return (
      <div className='m-auto'>
            {/* media */}
            <div className='SmallFont'>
                  <h1 className='BigFont text-white text-center text-2xl'>Media</h1>
                  <div className='flex justify-center'>
                        {mediaData.map((icon) => (
                              <div className='bg-black mx-2 p-10 bg-opacity-70 text-white text-center'>
                              {/* animation */}
                              <motion.div 
                                    whileHover={{ 
                                          scale: 1.5, 
                                          rotate: 720,
                                          transition: { duration: 0.2}, 
                                    }}
                              >
                              
                                    <a href={icon.url} key={icon.id}>
                                          <h1>{icon.name}</h1>
                                          <img src={icon.icon} alt={icon.name} className='h-[6rem] w-[6rem]' />
                                    </a> 
                              </motion.div>
                              </div>       
                              
                        ))}
                  </div>
            </div>
            {/* productivity */}
            <div className='SmallFont'>
                  <h1 className='BigFont text-white text-center text-2xl'>Productivity</h1>
               
                  <div className='flex justify-center'>
                        {productivityData.map((icon) => (
                        <div className='bg-black mx-2 p-10 bg-opacity-70 text-white text-center'>
                        <motion.div 
                              whileHover={{ 
                                    scale: 1.5, 
                                    rotate: 720,
                                    transition: { duration: 0.2}, 
                              }}
                        >
                              <a href={icon.url} key={icon.id}>
                              <h1>{icon.name}</h1>
                              <img src={icon.icon} alt={icon.name} className='h-[6rem] w-[6rem]' />
                              </a>
                        </motion.div>
                        </div>
                        ))}
                  </div>
            </div>
      </div>
  )
}

export default IconBox