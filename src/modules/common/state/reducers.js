import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  language: 'en'
}

export const commonReducer = createSlice({
  name: 'change language',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload
    }
  }
})

export const { changeLanguage } = commonReducer.actions

export default commonReducer.reducer
