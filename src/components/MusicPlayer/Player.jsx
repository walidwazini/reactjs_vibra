import React, { useEffect, useRef } from 'react'

const Player = ({
  activeSong, isPlaying, volume, repeat,
  seekTime, onEnded, onTimeUpdate, onLoadedData
}) => {
  const ref = useRef(null)
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
      // console.log(activeSong?.hub?.actions[1]?.uri)
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    ref.current.volume = volume;
    // console.log(ref.current.volume)
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);


  return (

    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  )
}

export default Player