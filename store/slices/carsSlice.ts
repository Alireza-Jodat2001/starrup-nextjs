import { InitialState } from '@/types/slices/carsTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialState = {
  cars: null,
};

const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCars(state, { payload }) {
      state.cars = payload;
    },
  },
});

export const { setCars } = slice.actions;
export default slice.reducer;
