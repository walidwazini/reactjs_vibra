import React, { useState, useEffect } from 'react'

import { genres } from '../assets/constants'
import { useGetTopSongByGenreQuery } from '../store/services/shazamCore'
import { SongCard, Loader, Error } from '../components'

const Explore = () => {
  const genreTitle = 'Hip Hop'

  const queryResponse = useGetTopSongByGenreQuery('HIP_HOP_RAP')
  const { data, isFetching, isError } = queryResponse

  console.log(queryResponse)

  if (isFetching) return <Loader title={'Loading songs..'} />

  if (isError) return <Error />

  return (
    <div className='flex flex-col' >
      <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 ' >
        <h1 className='font-bold text-2xl text-left ' >
          Explore {genreTitle}
        </h1>

        <select
          className='bg-black text-gray-400 p-3 text-sm rounded-md outline-none sm:mt-0 mt-5 '
        >
          {genres.map(genre => (
            <option key={genre.value} value={genre.value} >{genre.title}</option>
          ))}
        </select>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8' >
        {data?.tracks?.map((song, i) => {
          return (
            <SongCard
              key={i}
              song={song}
              imgUrl={song.images.background}
              title={song.title}
              singer={song.subtitle}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Explore