import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Loader, DetailsHeader, Error } from '../components'
import { useGetArtistDetailsQuery, useGetArtistTopSongQuery } from '../store/services/shazamCore'
import { RecomSongs } from '../components'

const ArtistDetails = () => {
  const { artistId } = useParams()
  const {
    data: artistData,
    isFetching: isFetchingArtist,
    isError } = useGetArtistDetailsQuery(artistId)
  
  const {
    data: topSongsData
  } = useGetArtistTopSongQuery(artistId)

  if (isFetchingArtist) return <Loader title={'Loading artist details'} />

  // console.log(artistData)

  return (
    <div>
      <DetailsHeader artistData={artistData} artistId={artistId} />
      <div className='mt-10 p-4 flex flex-col text-white hover:underline cursor-pointer text-md' >
        {topSongsData && topSongsData?.data?.slice(0,6).map((item,i) => (
          <div key={i} className='mt-2' >
            {item.id}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArtistDetails