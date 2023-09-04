import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Loader, DetailsHeader, Error } from '../components'
import { setActiveSong, playPause } from '../store/features/playerSlice'
import { useGetArtistDetailsQuery, useGetArtistTopSongQuery } from '../store/services/shazamCore'
import { RecomSongs } from '../components'

const ArtistDetails = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { artistId } = useParams()
  const {
    data: artistData,
    isFetching: isFetchingArtist,
    isError } = useGetArtistDetailsQuery(artistId)

  const { data: topSongsData } = useGetArtistTopSongQuery(artistId)

  if (isFetchingArtist) return <Loader title={'Loading artist details'} />


  return (
    <div>
      <DetailsHeader artistData={artistData} artistId={artistId} />
      <div className='mt-10 p-4 flex flex-col text-white' >
        {topSongsData && (
          <RecomSongs
            data={topSongsData?.data?.slice(0, 5)}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        )}
      </div>
    </div>
  )
}

export default ArtistDetails