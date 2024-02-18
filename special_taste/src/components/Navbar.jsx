import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-orange-600'>
        <div className='text-white flex flex-col justify-center items-center p-28'>
            <p className="text-md tracking-wide">BREAKING BREAD</p>
            <h1 className="text-6xl sm:text-center mt-6 sm:leading-[70px]">THE SPECIAL TASTE</h1>
            <p className='sm:text-center p-6 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore culpa odit officia et neque nesciunt sunt perferendis! Quisquam, assumenda!</p>
            <button className='tracking-wider text-sm font-semibold bg-white text-gray-900 py-2 px-4'>PURCHASE NOW</button>
        </div>
    </div>
  )
}

export default Navbar