import React from 'react'

import Controls from './Controls'
import Seekbar from './Seekbar'
import Player from './Player'
import VolumeBar from './VolumeBar'

const MusicPlayer = () => {
  return (
    <div className={`relative sm:px-12 px-8 w-full flex items-center justify-between `}>
      
      {/* TRACKS  */}
      <div className="flex-1 flex items-center justify-start ">
        <div className={`hidden sm:block h-16 w-16 mr-4`} >
          {/* IMAGE */}
        </div>
        <div className='w-[50%] ' >
          <p className='truncate text-white font-bold text-lg ' >
              Song Title 
          </p>
          <p className='truncate text-gray-400 ' >
            Subtitle / Artist   
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