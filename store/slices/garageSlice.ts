import { InitialState, setGarageIdReducer } from '@/types/slices/garageTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialState = {
  garageData: {
    garage_id: null,
    user_id: null,
    title: null,
    description: null,
    address: null,
    lat: null,
    lon: null,
    is_deleted: null,
    telephone: null,
    phone_number: null,
    is_phone_number_visible: null,
  },
};

const garageSlice = createSlice({
  name: 'garage',
  initialState,
  reducers: {
    setGarageId(state, { payload }: setGarageIdReducer) {
      state.garageData.garage_id = payload;
    },
    setBasicInfo(state, { payload }) {
      const { description, title, garage_id, is_phone_number_visible, phone_number, telephone } = payload;
      state.garageData.garage_id = garage_id;
      state.garageData.title = title;
      state.garageData.description = description;
      state.garageData.is_phone_number_visible = is_phone_number_visible;
      state.garageData.phone_number = phone_number;
      state.garageData.telephone = telephone;
    },
    setIncomplete(state, { payload }) {
      state.garageData = payload;
    },
  },
});

export const { setGarageId, setBasicInfo, setIncomplete } = garageSlice.actions;
export default garageSlice.reducer;
