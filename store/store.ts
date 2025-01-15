import { configureStore } from '@reduxjs/toolkit';
import alertDialog from '@/store/slices/alertDialogSlice';
import allGarageByOwner from '@/store/slices/allGarageByOwnerSlice';
import garage from '@/store/slices/garageSlice';
import duties from '@/store/slices/dutiesSlice';
import cars from '@/store/slices/carsSlice';
import locationInfo from '@/store/slices/locationInfoSlice';
import filteredGarages from '@/store/slices/filteredGaragesSlice';

export const store = configureStore({
  reducer: {
    alertDialog,
    allGarageByOwner,
    garage,
    duties,
    cars,
    locationInfo,
    filteredGarages,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
