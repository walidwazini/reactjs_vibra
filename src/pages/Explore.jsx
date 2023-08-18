import React from 'react'

const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
]

const dummySongs = [
  {title: 'Kaikai Kitan'},
  {title: 'STARS'},
  {title: 'Rolling Stars'},
  {title: 'Harukaze'},
  {title: 'Blue Bird'},
]

const Explore = () => {
  const genreTitle = 'Jazz'

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
          {dummySongs.map((song,i) => (
            <div key={i} >{song.title}</div>
          ))}
      </div>
    </div>
  )
}

export default Explore