import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  data: [],
  selectedIndexName: '',
  selectedChecklistID: '',
};

const generateUUID = (data) =>
  data.map((eachIndex) => ({
    ...eachIndex,
    checklists: eachIndex.checklists.map((eachChecklist) => ({
      ...eachChecklist,
      ID: uuidv4(),
      items: eachChecklist.items.map((eachItem) => ({
        ...eachItem,
        ID: uuidv4(),
      })),
    })),
  }));

export const eclSlice = createSlice({
  name: 'ecl',
  initialState,
  reducers: {
    setChecklistData: (state, action) => {
      const modifiedData = generateUUID(action.payload);
      return {
        ...state,
        data: modifiedData,
      };
    },
    setSelectedIndexName: (state, action) => ({
      ...state,
      selectedIndexName: action.payload,
    }),
    setSelectedChecklistID: (state, action) => ({
      ...state,
      selectedChecklistID: action.payload,
    }),
  },
});

export const {
  setChecklistData,
  setSelectedIndexName,
  setSelectedChecklistID,
} = eclSlice.actions;

export default eclSlice.reducer;
