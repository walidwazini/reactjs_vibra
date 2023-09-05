import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

import { Error, Loader, SongCard } from '../components';
import naruto from '../assets/naruto.jpeg'
import { useGetAnyBySearchTermQuery } from '../store/services/shazamCore';

const ArtistCard = ({id, name, img }) => (
  <div className='bg-white/10 bg-opacity-75 backdrop-blur-md rounded-md w-56 h-[19rem] flex flex-col items-center' >
    <img
      className='mt-4 mb-10 rounded-full w-40 h-40 object-cover shadow-xl shadow-black '
      src={img}
    />
    <div className='flex flex-col items-start w-full px-6 ' >
      <p className='text-white text-xl uppercase font-semibold hover:underline cursor-pointer ' >
        <Link to={`/artist/${id}`} >{name}</Link>
      </p>
      <p className='text-gray-300 text-lg ' >Artist</p>
    </div>
  </div>
)

const TrackCard = ({ id, title, subtitle, img }) => (
  <div className={`p-4 rounded-md w-full lg:w-2/3 bg-transparent hover:bg-slate-700 flex gap-4 `}  >
    <img src={img ? img : naruto} className='w-20 h-20 object-cover' />
    <div className='h-20 flex flex-col justify-evenly ' >
      <p className='text-white text-xl capitalize hover:underline' >
        <Link to={`/songs/${id}`} >{title}</Link>
      </p>
      <p className='text-gray-400 text-lg capitalize ' >{subtitle}</p>
    </div>
  </div>
)

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetAnyBySearchTermQuery(searchTerm)

  const artists = data?.artist?.hits
  const tracks = data?.tracks?.hits

  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  if (error) return <Error />;

  // if (!isFetching) console.log(data)

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing results for <span className="font-black">{searchTerm}</span></h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      </div>

      <div className='flex flex-col lg:flex-row ' >
        <div className='mb-10  md:w-3/5 p-1 ' >
          <div className='text-3xl text-white font-bold mb-6 ' >Songs</div>
          <div className='flex flex-col w-full py-2 px2 gap-2 ' >
            {tracks && tracks.map(item => (
              <TrackCard
                key={item?.key}
                id={item?.key}
                title={item?.heading?.title}
                subtitle={item?.heading?.subtitle}
                img={item?.images?.default}
              />
            ))}
          </div>
        </div>
        <div className=' md:w-2/5 p-1 '  >
          <div className='text-3xl text-white font-bold mb-6 ' >Artists</div>
          <div className='flex flex-wrap justify-start gap-6 ' >
            {artists && artists.map(item => (
              <ArtistCard 
              key={item?.artist?.adam_id} 
              id={item?.artist?.adam_id} 
              img={item?.artist?.avatar} name={item?.artist?.name} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;