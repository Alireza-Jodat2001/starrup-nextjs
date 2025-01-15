import { InitialState } from '@/types/slices/dutiesTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialState = {
  duties: null,
};

const slice = createSlice({
  name: 'duties',
  initialState,
  reducers: {
    setDuties(state, { payload }) {
      state.duties = payload;
    },
  },
});

export const { setDuties } = slice.actions;
export default slice.reducer;
