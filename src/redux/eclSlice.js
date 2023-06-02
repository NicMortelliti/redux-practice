import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  selectedIndexId: '',
  selectedSubIndexId: '',
};

export const eclSlice = createSlice({
  name: 'ecl',
  initialState,
  reducers: {
    setChecklistData: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    setSelectedIndexId: (state, action) => ({
      ...state,
      selectedIndexId: action.payload,
      selectedSubIndexId: initialState.selectedSubIndexId,
    }),
    setSelectedSubIndexId: (state, action) => ({
      ...state,
      selectedSubIndexId: action.payload,
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
  setSelectedIndexId,
  setSelectedSubIndexId,
  toggleChecklistItemStatus,
} = eclSlice.actions;

export default eclSlice.reducer;
