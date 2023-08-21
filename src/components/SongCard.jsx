import React from 'react'
import { Link } from 'react-router-dom'

import PlayPause from './PlayPause'

const SongCard = ({ song, isPlaying, activeSong, data }) => {
  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer ' >
      <div className='relative w-full h-56 group' >
        <div className={`absolute inset-0 justify-center items-center 
        bg-black bg-opacity-50 group-hover:flex hidden`} >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
          />
        </div>
        <img src={song.images.background} alt="song_cover" className='rounded-lg w-full h-full' />
      </div>
      <div className='mt-4 flex flex-col' >
        <p className='font-semibold text-lg truncate text-white ' >
          <button onClick={() => console.log(song?.key)} >
            {/* <Link to={`/songs/${song.key}`} ></Link> */}
            {song.title}
          </button>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          {/* <Link to={song.artists ? `/artists/${song?.artist[0]?.adamid}` : `/top-artists`} ></Link> */}
          {song.subtitle}
        </p>
      </div>
    </div>
  )
}

export default SongCard