import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isProfileOpen: false,
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    toggleProfileOpenButton: (state) => {
      return { ...state, isProfileOpen: !state.isProfileOpen }
    },
  },
})

export const { toggleProfileOpenButton } = homeSlice.actions

export default homeSlice.reducer
