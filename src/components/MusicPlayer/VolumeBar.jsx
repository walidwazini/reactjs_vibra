import React from 'react'
import {
  BsFillVolumeUpFill, BsVolumeDownFill,
  BsFillVolumeMuteFill
} from 'react-icons/bs';


const VolumeBar = ({ value, onChange, min, max }) => {

  return (
    <div className="hidden lg:flex flex-1 items-center justify-end">
      <BsFillVolumeUpFill size={25} color="#FFF" onClick={() => { }} />
      <BsVolumeDownFill size={25} color="#FFF" onClick={() => { }} />
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
      />
    </div>
  )
}

export default VolumeBar