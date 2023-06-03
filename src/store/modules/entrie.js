import { createSlice } from '@reduxjs/toolkit'

const entrieSlice = createSlice({
  name: 'entrie',
  initialState: {

  },
  reducers: {

  }
})

//不要忘了导出的是reducer,之前报错Store does not have a valid reducer
export default entrieSlice.reducer