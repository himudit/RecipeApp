import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const id = action.payload;
      if (state[id]) {
        state[id] += 1;
      } else {
        state[id] = 1;
      }
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
