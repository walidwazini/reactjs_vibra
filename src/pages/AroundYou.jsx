import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

import { Loader, Error, SongCard, } from '../components/'
import PlayPause from '../components/PlayPause'
import SongBar from '../components/SongBar'
import { useGetTopSongsByCountryQuery } from '../store/services/shazamCore'

const AroundYou = () => {
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(true)
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const { data, isFetching, error } = useGetTopSongsByCountryQuery(country)

  useEffect(() => {
    axios
      .get(`https://api.geoapify.com/v1/ipinfo?apiKey=${import.meta.env.VITE_GEOAPIFY_API_KEY}`)
      .then(res => setCountry(res?.data?.country?.iso_code))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [country])

  if (isFetching && loading) return <Loader title={'loading songs around you...'} />

  if (error && country !== '') return <Error />

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around you <span className="font-black">{country}</span></h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <div key={song?.key} className='bg-slate-900 hover:bg-slate-500 rounded-md p-4 cursor-pointer flex flex-col gap-2 w-50' >
            <button
              className='text-white text-xl hover:underline'
              onClick={() => console.log(song?.key)}
            >
              {song?.title}
            </button>
            <div className='text-slate-300 text-sm italic ' >{song?.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AroundYou