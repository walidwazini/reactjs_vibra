import React from 'react'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';


const Controls = ({
  isPlaying,handlePlayPause, handleNextSong, handlePrevSong
}) => {
  return (
    <div className='flex items-center justify-around md:w-36 lg:w-52 2xl:w-80' >
      <BsArrowRepeat
        size={20}
        color={'white'}
        onClick={() => { }}
        className="hidden sm:block cursor-pointer"
      />
      <MdSkipPrevious onClick={() => { }} size={30} color="#FFF" className="cursor-pointer" />
      {isPlaying ? (
        <BsFillPauseFill
          size={45}
          color='#fff'
          onClick={handlePlayPause}
          className='cursor-pointer'
        />
      ) : (
        <BsFillPlayFill
          size={45} color="#FFF"
          onClick={handlePlayPause} className="cursor-pointer"
        />
      )}
      <MdSkipNext onClick={handleNextSong} size={30} color="#FFF" className="cursor-pointer" />
      <BsShuffle size={20} color={'white'} onClick={() => { }} className="hidden sm:block cursor-pointer" />
    </div>
  )
}

export default Controls