import { configureStore } from '@reduxjs/toolkit'
import { globalSlice } from './slice'

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
