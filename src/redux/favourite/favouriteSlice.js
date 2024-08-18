import { createSlice } from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: [],
    reducers: {
        addFavourite: (state, action) => {
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
        },
    },
});

export const { addFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;