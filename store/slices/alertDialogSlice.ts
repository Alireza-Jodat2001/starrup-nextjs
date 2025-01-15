import { InitialState } from '@/types/slices/alertDialogTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialState = {
  dialogPack: [],
  open: false,
};

const alertDialogSlice = createSlice({
  name: 'alertDialog',
  initialState,
  reducers: {
    openAlertDialog: (state, action) => {
      state.dialogPack.push({
        ...action.payload,
        key: new Date().getTime().toString(),
      });
    },
    closeAlertDialog: state => {
      state.open = false;
    },
    clearAlertDialogPack: state => {
      return {
        open: true,
        dialogPack: state.dialogPack.slice(1),
      };
    },
  },
});

export const { openAlertDialog, clearAlertDialogPack, closeAlertDialog } = alertDialogSlice.actions;
export default alertDialogSlice.reducer;
