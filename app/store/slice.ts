import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  previousQuery: '',
  results: [],
  availableSorts: [],
  availableFilters: [],
  defaultSort: {
    id: '',
    name: '',
  }
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setState: (state, action) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { setState } = globalSlice.actions
