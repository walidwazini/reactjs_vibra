import React, { useEffect } from 'react'
import axios from 'axios'

import { useGetTopSongsByCountryQuery } from '../store/services/shazamCore'
import { useState } from 'react'

const AroundYou = () => {
  const [country, setCountry] = useState('')
  const { data } = useGetTopSongsByCountryQuery(country)

  console.log(data)

  useEffect(() => {
    axios.get(`https://api.geoapify.com/v1/ipinfo?apiKey=${import.meta.env.VITE_GEOAPIFY_API_KEY}`)
      // .then(res => console.log(res?.data?.country?.iso_code))
      .then(res => setCountry(res?.data?.country?.iso_code))
      .catch(err => console.log(err))
  }, [country])


  return (
    <div className='text-white' >
      <div>Around You</div>
      <div>

      </div>
    </div>
  )
}

export default AroundYou