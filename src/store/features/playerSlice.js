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
      // console.log(action.payload)
      state.activeSong = action.payload.song
      state.currentIndex = action.payload.index
      state.isActive = true

    },
    playPause: (state, action) => {
      console.log(action.payload)
      state.isPlaying = action.payload;
      // console.log(`${state.activeSong.title} is playing `)
    },
  }
})

export const { setActiveSong, playPause } = playerSlice.actions

export default playerSlice.reducer