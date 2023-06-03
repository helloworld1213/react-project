import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './modules/home'
// import entrieSlice from './modules/entrie'
import entrieSlice from './modules/entrie/index'

const store = configureStore({
  reducer: {
    home: homeSlice,
    entrie: entrieSlice
  }
})

export default store