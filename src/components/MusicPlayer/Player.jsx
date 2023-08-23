import React from 'react'

const Player = ({
  activeSong, isPlaying, volume, repeat,
  seekTime, onEnded, onTimeUpdate, onLoadedData
}) => {

  // console.log(activeSong)

  return (

    <audio
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  )
}

export default Player