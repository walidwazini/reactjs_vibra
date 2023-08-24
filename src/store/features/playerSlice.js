import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song
      state.currentIndex = action.payload.index
      state.isActive = true

      state.currentSongs = action.payload.data?.tracks;
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
    prevSong: () => { }
  }
})

export const { setActiveSong, playPause, nextSong } = playerSlice.actions

export default playerSlice.reducer