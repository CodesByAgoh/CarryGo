import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center hero-background top-1 text-black absolute w-screen justify-between font-kumbh-sans lg:px-52 lg:py-6 bg-gray-100'>
      <h1 className='lg:text-3xl text-2xl ml-6 mt-4  font-bold '>CarryGo</h1>
      <div className='lg:flex  hidden items-center gap-16 mr-72'>
        <h2 className='text-base text-black'>company</h2>
        <h2 className='text-base text-black'>Vendors</h2>
        <h2 className='text-base text-black'>products</h2>
        <h2 className='text-base text-black'>more</h2>
      </div>
    </div>
  )
}

export default Navbar

