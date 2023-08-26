import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useGetTopSongsInWorldQuery } from '../store/services/shazamCore';
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../store/features/playerSlice';

const TopChartCard = ({ song, i, isPlaying, activeSong, handlePause, handlePlay }) => (
  <div className='w-full flex- flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2 ' >
    <h3 className='font-bold text-base text-white mr-3 ' >{i + 1}.</h3>
    <div className='flex flex-1 flex-row justify-between items-center ' >
      <img src={song?.images?.coverart} alt='coverart' />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link >
          <p className="text-xl font-bold text-white">
            {song?.title}
          </p>
        </Link>
        <Link >
          <p className="text-base text-gray-300 mt-1">
            {song?.subtitle}
          </p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePlay={handlePlay}
      handlePause={handlePause}
      size={30}
    />
  </div>
)

const TopPlay = () => {
  const { data } = useGetTopSongsInWorldQuery()
  const divRef = useRef()
  const dispatch = useDispatch()
  const { activeSong, isPlaying } = useSelector(state => state.player)

  const topPlays = data?.slice(0, 5)

  // console.log(res?.data)

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' })
  })

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true))
  }

  const handlePauseClick = () => dispatch(playPause(false))

  return (
    <div ref={divRef} className={`xl:ml-6 ml-0 xl:mb-0 mb-6 
     flex-1 xl:max-w-[500px] max-w-ful flex flex-col `} >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link >
            <p className='text-gray-300 text-base cursor-pointer' >See more</p>
          </Link>
        </div>
        <div className='mt-4 flex flex-col gap-1 ' >
          {topPlays?.map((song, i) => (
            <TopChartCard
              i={i}
              song={song}
              key={song.key}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePlay={() => handlePlayClick(song, i)}
              handlePause={handlePauseClick}
            />
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col mt-8 ' >
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>
          <Link>
            <p className='text-gray-300 text-base cursor-pointer' >See more</p>
          </Link>
        </div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className='mt-4'
        >
          {topPlays?.map((song, i) => (
            <SwiperSlide
              key={song?.key}
              style={{ width: '25%', height: 'auto' }}
              className='shadow-lg rounded-full animate-slidertight '
            >
              <Link>
                <img src={song?.images?.background} alt='name' className='rounded-full w-full object-cover' />
                <h2>{song?.subtitle}</h2>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TopPlay