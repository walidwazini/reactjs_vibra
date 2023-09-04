import React from 'react'

import { genres } from '../assets/constants'
import { useGetTopSongByGenreQuery } from '../store/services/shazamCore'
import { selectGenreListId } from '../store/features/playerSlice'
import { SongCard, Loader, Error } from '../components'
import { useDispatch, useSelector } from 'react-redux'

const Explore = () => {
  const dispatch = useDispatch()

  const { activeSong, isPlaying, genreListId } = useSelector(state => state.player || 'POP')
  const queryResponse = useGetTopSongByGenreQuery(genreListId || 'POP')
  const { data, isFetching, isError } = queryResponse

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title

  if (isFetching) return <Loader title={'Loading songs..'} />

  if (isError) return <Error />

  // console.log(data)

  return (
    <div className='flex flex-col' >
      <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 ' >
        <h1 className='font-bold text-2xl text-left text-white ' >
          Explore {genreTitle}
        </h1>

        <select
          onChange={ev => dispatch(selectGenreListId(ev.target.value))}
          value={genreListId || 'POP'}
          className='bg-black text-gray-400 p-3 text-sm rounded-md outline-none sm:mt-0 mt-5 '
        >
          {genres.map(genre => (
            <option key={genre.value} value={genre.value} >{genre.title}</option>
          ))}
        </select>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8' >
        {data?.tracks?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}

export default Explore