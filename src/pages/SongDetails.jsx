import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveSong, playPause } from '../store/features/playerSlice'
import { useGetSongDetailsQuery } from '../store/services/shazamCore'

const SongDetails = () => {
  const { songId } = useParams()
  const { activeSong, isPlaying } = useSelector(state => state.player)

  const { data: songData, isFetching, isError } = useGetSongDetailsQuery(songId)
  console.log(songData)

  return (
    <div className="flex flex-col">
      <p>Song Detials of {songId} </p>

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">

        </div>
      </div>


    </div>
  )
}

export default SongDetails