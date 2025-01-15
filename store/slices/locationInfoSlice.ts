import { InitialState } from '@/types/slices/locationInfoTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialState = {
  lat: null,
  lng: null,
};

const locationSlice = createSlice({
  name: 'locationInfo',
  initialState,
  reducers: {
    setCoordinates: (state, { payload }) => {
      state.lat = payload.lat;
      state.lng = payload.lng;
    },
  },
});

export const { setCoordinates } = locationSlice.actions;
export default locationSlice.reducer;
