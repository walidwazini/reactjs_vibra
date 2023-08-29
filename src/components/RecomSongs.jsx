import React from 'react'
import SongBar from './SongBar'

const RecomSongs = ({
  data, artistId, isPlaying, activeSong, handlePause, handlePlay
}) => {

  console.log(data)

  return (
    <div className='flex flex-col' >
      <h1 className="font-bol text-3xl text-white">Recommended Songs :</h1>
      <div className="mt-6 w-full flex flex-col">
        {data?.map((song,i) => (
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
        {/* {data?.map((song, i) => (
          <div
            key={i}
            className='w-full p-4 my-1 rounded-sm flex flex-col text-white text-lg ' >
            <div>{song?.title}</div>
            <div>
              <span className='text-sm italic mx-2' >{song?.subtitle}</span>
              <span className='text-sm italic' >{song?.artists[0]?.adamid}</span>
              <img className='w-24 h-auto rounded-full' src={song?.images?.coverart} />
            </div>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default RecomSongs