import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    customerId: null,
    customerName: null,
    customerAddress: null,
    Phone:null,
    emailAddress: null,
  },
  reducers: {
    setcustomerInfo:(state, action) => {
      state.customerId = action.payload.customerId;
      state.customerName = action.payload.customerName;
    } 
     },
  });

export const { setcustomerInfo } = appSlice.actions;

export const selectcustomerId = state => state.app.customerId;
export const selectcustomerName = state => state.app.customerName;

export default appSlice.reducer;
