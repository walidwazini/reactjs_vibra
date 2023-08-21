import { configureStore } from '@reduxjs/toolkit'

import { shazamCoreApi } from './services/shazamCore'

export const ReduxStore = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware)
})