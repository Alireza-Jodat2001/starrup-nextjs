import { InitialState } from '@/types/slices/allGarageByOwnerTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialState = {
  allGarageByOwner: [],
};

const allGarageByOwnerSlice = createSlice({
  name: 'allGarageByOwner',
  initialState,
  reducers: {
    setAllGarageByOwnerSlice(state, { payload }) {
      state.allGarageByOwner = payload;
    },
    deleteGarage: (state, { payload }) => {
      state.allGarageByOwner = state.allGarageByOwner?.filter(item => item?.garage_id !== payload);
    },
  },
});

export const { setAllGarageByOwnerSlice, deleteGarage } = allGarageByOwnerSlice.actions;
export default allGarageByOwnerSlice.reducer;
