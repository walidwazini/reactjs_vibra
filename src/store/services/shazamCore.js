import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY)

      return headers
    }
  }),
  endpoints: builder => ({
    getTopSongsInWorld: builder.query({ query: () => '/charts/get-top-songs-in-world?limit=10' }),
    getTopSongByGenre: builder.query({ query: (genreTerm) => `/charts/get-top-songs-in_world_by_genre?genre=${genreTerm}&limit=6` }),
    getSongDetails: builder.query({ query: (songId) => `/songs/get_details?id=${songId}` }),
    getRecommendSongs: builder.query({ query: (songId) => `/songs/list-recommendations?id=${songId}&limit=5` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artist/get-details?id=${artistId}` }),
    getArtistTopSong: builder.query({ query: (artistId) => `/artist/get-top-songs?id=${artistId}&offset=0` }),
    getTopSongsByCountry: builder.query({ query: (countryCode) => `/charts/get-top-songs-in-country?country_code=${countryCode}&limit=10` }),
    getAnyBySearchTerm: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}&limit=10` })
  })
})

export const {
  useGetTopSongsInWorldQuery,
  useGetTopSongByGenreQuery,
  useGetSongDetailsQuery,
  useGetRecommendSongsQuery,
  useGetArtistDetailsQuery,
  useGetArtistTopSongQuery,
  useGetTopSongsByCountryQuery,
  useGetAnyBySearchTermQuery
} = shazamCoreApi