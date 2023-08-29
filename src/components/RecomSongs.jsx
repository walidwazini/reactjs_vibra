import React from 'react'
import SongBar from './SongBar'

const RecomSongs = ({
  data, artistId, isPlaying, activeSong, handlePause, handlePlay
}) => {

  // console.log(data)

  return (
    <div className='flex flex-col' >
      <h1 className="font-bol text-3xl text-white">Recommended Songs :</h1>
      <div className="mt-6 w-full flex flex-col">
        {data?.tracks.map((song,i) => (
          <SongBar
            key={`${song?.artists[0].adamid}-${song?.key}-${i}`}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePause}
            handlePlayClick={handlePlay}
          />
        ))}
      </div>
    </div>
  )
}

export default RecomSongs