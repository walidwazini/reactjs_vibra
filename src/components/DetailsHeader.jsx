import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'


const DetailsHeader = ({ songData, artistId, artistData }) => {
  // if (artistId) console.log(artistData.data[0]?.attributes)
  // console.log(artistId)
  const navigate = useNavigate()
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <button
        type='button'
        onClick={() => navigate(-1)}
        className='h-auto w-auto rounded-full p-2 bg-transparent hover:bg-slate-900 text-white font-bold absolute top-4 left-2 z-40 cursor-pointer'
      >
        <BiArrowBack size={27} />
      </button>

      <div className="absolute inset-0 flex items-center">
        <img
          alt="profile"
          src={
            artistId ? artistData?.data[0]?.attributes?.artwork?.url
              .replace('{w}', '500')
              .replace('{h}', '500')
              : songData?.images?.coverart
          }
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artistData?.data[0]?.attributes?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artist/${songData?.artists[0]?.adamid}`}>
              <p className="text-base text-gray-200 mt-2">{songData?.subtitle}</p>
            </Link>
          )}

          <p className="text-base text-gray-200 mt-2">
            {artistId
              ? artistData?.data[0].attributes?.genreNames[0]
              : songData?.genres?.primary
            }
          </p>
        </div>
      </div>

      <div className="w-full sm:h-44 h-24" />
    </div>
  )
}

export default DetailsHeader