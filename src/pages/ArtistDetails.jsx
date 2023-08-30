import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useGetArtistDetailsQuery } from '../store/services/shazamCore'

const ArtistDetails = () => {
  const { artistId } = useParams()
  const { data, isFetching, isError } = useGetArtistDetailsQuery(artistId)

  if (!isFetching && !isError) console.log(data)

    return (
      <div>ArtistDetails</div>
    )
}

export default ArtistDetails