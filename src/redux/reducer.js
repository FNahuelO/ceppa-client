import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  staff: [],
  revistas: [],
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
  },
})

export const { staff, revistas } = data.actions
