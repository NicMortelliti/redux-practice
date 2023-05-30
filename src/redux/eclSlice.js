import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  selectedIndex: '',
  selectedChecklist: '',
};

export const eclSlice = createSlice({
  name: 'ecl',
  initialState,
  reducers: {
    setChecklistData: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setChecklistData } = eclSlice.actions;

export default eclSlice.reducer;
