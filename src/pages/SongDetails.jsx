import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveSong, playPause } from '../store/features/playerSlice'
import { useGetSongDetailsQuery } from '../store/services/shazamCore'
import DetailsHeader from '../components/DetailsHeader';

const SongDetails = () => {
  const divRef = useRef()
  const { songId } = useParams()
  const { activeSong, isPlaying } = useSelector(state => state.player)

  const { data: songData, isFetching, isError } = useGetSongDetailsQuery(songId)
  // console.log(songData)

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' })
  })

  return (
    <div ref={divRef} className="flex flex-col">
      <DetailsHeader songData={songData} />
      <div className="mb-10 mx-10 ">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS'
            ? songData?.sections[1]?.text.map((line, i) => (
              <p key={`lyrics-${line}-${i}`} className="text-white text-base my-1">{line}</p>
            ))
            : (
              <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
            )}
        </div>
      </div>


    </div>
  )
}

export default SongDetails