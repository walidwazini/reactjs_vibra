import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import PlayPause from './PlayPause'
import { playPause, setActiveSong } from '../store/features/playerSlice'

const SongCard = ({ song, isPlaying, activeSong, data, index }) => {
  const dispatch = useDispatch()

  const playHandler = () => {
    console.log(song)
    dispatch(setActiveSong({ song, data, index }))
    dispatch(playPause(true))
  }

  const pauseHandler = () => dispatch(playPause(false))

  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer ' >
      <div className='relative w-full h-56 group' >
        <div className={`absolute inset-0 justify-center items-center 
        bg-black bg-opacity-50 group-hover:flex hidden`} >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePlay={playHandler}
            handlePause={pauseHandler}
            size={70}
          />
        </div>
        <img src={song.images.coverart} alt="song_cover" className='rounded-lg w-full h-full' />
      </div>
      <div className='mt-4 flex flex-col' >
        <p className='font-semibold text-lg truncate text-white hover:underline hover:text-slate-300 ' >
          {/* <button onClick={() => console.log(song?.key)} > */}
          <Link to={`/songs/${song.key}`} >
            {song.title}
          </Link>
          {/* </button> */}
        </p>
        <p className="text-sm truncate text-gray-300 mt-1 hover:underline hover:text-slate-500 ">
          <Link to={song.artists ? `/artist/${song?.artists[0]?.adamid}` : `/top-artists`} >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SongCard