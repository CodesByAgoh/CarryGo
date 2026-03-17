import React from 'react'
import halfPhone from '../images/halfPhone.png'

function Section2() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#181916] text-white font-kumbh-sans px-4">
      <div className="text-center w-full max-w-3xl">
        <h2 className="lg:text-xl  text-sm font-light text-red-400 mb-3">
          The future of pickup is here
        </h2>

        <p className="lg:text-5xl text-2xl font-bold text-white">
          Feels like magic, <br /> but it's just Kwicky
        </p>

        <img
          src={halfPhone}
          alt="Half Phone"
          className="mt-6 mx-auto w-40 lg:w-80"
        />
      </div>
    </div>
  )
}

export default Section2