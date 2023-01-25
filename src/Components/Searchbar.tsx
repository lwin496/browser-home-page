import React from 'react'

const Searchbar = () => {
  return (
      <form className='flex justify-center' action="http://google.com/search" >
            <input type="search" id='query' name='q' placeholder='Search...' className='w-[50vw] h-[4rem] text-center border-b-4 border-indigo-500
            text-3xl SmallFont' />
            <button className='bg-green-200 px-2 border-b-4 border-indigo-500 SmallFont'> Search </button>
      </form>
  )
}

export default Searchbar