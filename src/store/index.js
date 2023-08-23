import { configureStore } from '@reduxjs/toolkit'

import { shazamCoreApi } from './services/shazamCore'
import playerReducer from './features/playerSlice'

export const ReduxStore = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware)
})