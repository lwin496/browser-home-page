import React from 'react'
import { useState, useEffect } from 'react'

const Clock = () => {
      const [date, setDate] = useState(new Date())
      const refreshClock = () => { 
            setDate(new Date())
      }
      useEffect(() => { 
            const timerId = setInterval(refreshClock, 1000)
            return function cleanup() {   
                  clearInterval(timerId)
            }
      },[])
  return (
      <span className='BigFont text-white text-[4.5rem] '> 
           {date.toLocaleTimeString()}
      </span>
  )
}

export default Clock