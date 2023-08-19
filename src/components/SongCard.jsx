import React from 'react'
import { Link } from 'react-router-dom'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const SongCard = ({ song, imgUrl, title, singer, id }) => {
  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer ' >
      <div className='relative w-full h-56 group' >
        <div className={`absolute inset-0 justify-center items-center 
        bg-black bg-opacity-50 group-hover:flex hidden`} >
          <FaPlayCircle size={35} className='text-gray-300' />
        </div>
        <img src={imgUrl} alt="song_cover" className='rounded-lg w-full h-full' />
      </div>
      <div className='mt-4 flex flex-col' >
        <p className='font-semibold text-lg truncate text-white ' >
          <button onClick={() => console.log(song?.key)} >
            {/* <Link to={`/songs/${song.key}`} ></Link> */}
            {title}
          </button>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          {/* <Link to={song.artists ? `/artists/${song?.artist[0]?.adamid}` : `/top-artists`} ></Link> */}
          {singer}
        </p>
      </div>
    </div>
  )
}

export default SongCard