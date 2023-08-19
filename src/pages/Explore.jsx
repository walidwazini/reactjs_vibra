import React, { useState, useEffect } from 'react'

import { SongCard } from '../components'

const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
]
const Explore = () => {
  const [theTracks, setTheTracks] = useState([])
  const genreTitle = 'Jazz'

  useEffect(() => {
    fetch(
      'https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in_world_by_genre?genre=POP&limit=6',
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY,
          'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
        }
      }
    )
      .then(res => res.json())
      .then(res => {
        setTheTracks(res.tracks)
        console.log(theTracks)
      })
      .catch(err => console.log(err))
  }, [])


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
        {theTracks?.map((song, i) => {
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