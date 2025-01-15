import { InitialState } from '@/types/slices/filteredGaragesTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialState = {
  filteredGarages: null,
};

const slice = createSlice({
  name: 'filteredGarages',
  initialState,
  reducers: {
    setFilteredGarages(state, { payload }) {
      state.filteredGarages = payload;
    },
  },
});

export const { setFilteredGarages } = slice.actions;

export default slice.reducer;
