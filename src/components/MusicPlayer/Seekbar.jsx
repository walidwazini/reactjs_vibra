import React from 'react'

const Seekbar = ({ value }) => {
  return (
    <div className='hidden sm:flex flex-row items-center' >
      <button className='hidden lg:mr-4 lg:block text-white ' onClick={() => { }} type='button' >
        -
      </button>
      <p className='text-white' >0:00</p>
      <input
        type='range'
        step={'any'}
        value={value}
        className='md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg '
      />
      <p className="text-white">4:00</p>
      <button type="button" onClick={() => {}} className="hidden lg:ml-4 lg:block text-white">
        +
      </button>
    </div>
  )
}

export default Seekbar