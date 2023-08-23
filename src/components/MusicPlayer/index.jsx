import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Controls from './Controls'
import Seekbar from './Seekbar'
import Player from './Player'
import VolumeBar from './VolumeBar'
import { playPause } from '../../store/features/playerSlice'

const MusicPlayer = () => {
  const { activeSong, isActive, isPlaying } = useSelector(state => state.player)
  const dispatch = useDispatch()

  const [duration, setDuration] = useState(0)
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.2)

  const handlePlayPause = () => {
    if (!isActive) return

    if (isPlaying) {
      dispatch(playPause(false))
    } else {
      dispatch(playPause(true))
    }
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
        <Controls
          isActive={isActive}
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
        />
        <Seekbar
          value={appTime}
          min={'0'}
          max={duration}
          onInput={event => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          onTimeUpdate={ev => setAppTime(ev.target.currentTime)}
          onLoadedData={ev => setDuration(ev.target.duration)}
        />
      </div>
      <VolumeBar
        value={volume}
        min={'0'} max={'1'}
        onChange={(ev) => {
          console.log(ev.target.volume)
          setVolume(ev.target.volume)
        }}
        setVolume={setVolume} 
        />
    </div>
  )
}

export default MusicPlayer