import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song
      state.currentIndex = action.payload.index
      state.isActive = true

      if (action.payload?.data?.tracks) {
        state.currentSongs = action.payload?.data?.tracks;
      }
      else if (action.payload?.recomData?.tracks) {
        state.currentSongs = action.payload?.recomData?.tracks;
      }
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    nextSong: (state, action) => {
      console.log(action.payload)
      state.activeSong = state.currentSongs[action.payload]

      state.currentIndex = action.payload;
      state.isActive = true;
    },
    prevSong: (state, action) => {
      console.log(action.payload)
      state.activeSong = state.currentSongs[action.payload]

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload
    }
  }
})

export const { setActiveSong, playPause, nextSong, prevSong, selectGenreListId } = playerSlice.actions

export default playerSlice.reducer