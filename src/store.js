import { configureStore } from '@reduxjs/toolkit'
import homSlice from './features/home/components/homSlice'
import editJobSlice from './features/job/editJobSlice'
import jobSlice from './features/job/jobSlice'
import productsSlice from './features/products/productsSlice'
import userSlice from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    user: userSlice,
    home: homSlice,
    job: jobSlice,
    editJob: editJobSlice,
  },
})
