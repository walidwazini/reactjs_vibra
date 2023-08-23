import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Controls from './Controls'
import Seekbar from './Seekbar'
import Player from './Player'
import VolumeBar from './VolumeBar'

const MusicPlayer = () => {
  const { activeSong, isActive } = useSelector(state => state.player)
  const dispatch = useDispatch()

  const handlePlayPause = () => {
  }


  return (
    <div className={`relative sm:px-12 px-8 w-full flex items-center justify-between `}>

      {/* TRACKS  */}
      <div className="flex-1 flex items-center justify-start ">
        <div className={`hidden sm:block h-16 w-16 mr-4`} >
          <img src={activeSong?.images?.coverart} alt='cover art' className='rounded-md' />
        </div>
        <div className='w-[50%] ' >
          <p className='truncate text-white font-bold text-lg ' >
            {activeSong?.title ? activeSong?.title : 'No song playing'}
          </p>
          <p className='truncate text-gray-400 ' >
            {activeSong?.subtitle ? activeSong?.subtitle : 'N/A'}
          </p>
        </div>
      </div>

      <div className='flex-1 flex flex-col items-center justify-center' >
        <Controls />
        <Seekbar />
        <Player />
      </div>
      <VolumeBar />
    </div>
  )
}

export default MusicPlayer