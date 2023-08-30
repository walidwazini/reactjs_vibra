import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Loader, DetailsHeader, Error } from '../components'
import { useGetArtistDetailsQuery } from '../store/services/shazamCore'


const ArtistDetails = () => {
  const { artistId } = useParams()
  const {
    data: artistData,
    isFetching: isFetchingArtist,
    isError } = useGetArtistDetailsQuery(artistId)

  if (isFetchingArtist) return <Loader title={'Loading artist details'} />

  // if (!isFetching && !isError) console.log(data)

  return (
    <div>
      <DetailsHeader artistData={artistData} artistId={artistId} />
    </div>
  )
}

export default ArtistDetails