import React from 'react'
import SongBar from './SongBar'

const RecomSongs = ({
  data, artistId, isPlaying, activeSong, handlePause, handlePlay
}) => {

  return (
    <div className='flex flex-col' >
      <h1 className="font-bol text-3xl text-white">Recommended Songs :</h1>
      <div className="mt-6 w-full flex flex-col">
        {data?.tracks.map((song, i) => (
          <SongBar
            // ! There a song that dont have artists key and  
            key={song?.artists ? `${song?.artists[0].adamid}-${song?.key}-${i}` : `N/A-${song?.key}-${i}`}
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