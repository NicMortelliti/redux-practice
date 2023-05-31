import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  selectedIndexObj: '',
  selectedSubIndexObj: '',
};

export const eclSlice = createSlice({
  name: 'ecl',
  initialState,
  reducers: {
    setChecklistData: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    setSelectedIndexObj: (state, action) => ({
      ...state,
      selectedIndexObj: action.payload,
      selectedSubIndexObj: initialState.selectedSubIndexObj,
    }),
    setSelectedSubIndexObj: (state, action) => ({
      ...state,
      selectedSubIndexObj: action.payload,
    }),
    toggleChecklistItemStatus: (state, action) => {
      const id = action.payload;
      const obj = state.data.find((obj) => obj.id === id);
      if (obj) {
        obj.completed = !obj.completed;
      }
    },
  },
});

export const {
  setChecklistData,
  setSelectedIndexObj,
  setSelectedSubIndexObj,
  toggleChecklistItemStatus,
} = eclSlice.actions;

export default eclSlice.reducer;
