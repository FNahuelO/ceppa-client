import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  staff: [],
  revistas: [],
  texts: [],
}

export const data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    staff: (state, action) => {
      state.staff = action.payload
    },
    revistas: (state, action) => {
      state.revistas = action.payload
    },
    texts: (state, action) => {
      state.texts = action.payload
    },
  },
})

export const { staff, revistas, texts } = data.actions
