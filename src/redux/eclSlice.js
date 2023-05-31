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
      status: 'Not-Started',
      items: eachChecklist.items.map((eachItem) => ({
        ...eachItem,
        ID: uuidv4(),
        completed: false,
      })),
    })),
  }));

const toggleStatus = (state, itemID) => {
  console.log(itemID);
  const { data, selectedIndexName, selectedChecklistID } = state;

  const itemsReducer = (items) => {
    return items.map((eachItem) => {
      if (eachItem.ID !== itemID) return eachItem;
      return {
        ...eachItem,
        completed: !eachItem.completed,
      };
    });
  };

  const checklistsReducer = (checklists) => {
    return checklists.map((eachChecklist) => {
      if (eachChecklist.ID !== selectedChecklistID) return eachChecklist;
      return {
        ...eachChecklist,
        items: itemsReducer(eachChecklist.items),
      };
    });
  };

  const indexReducer = (data) => {
    return data.map((eachIndex) => {
      if (eachIndex.indexName !== selectedIndexName) return eachIndex;
      return {
        ...eachIndex,
        checklists: checklistsReducer(eachIndex.checklists),
      };
    });
  };

  return indexReducer(data);
};

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
      selectedChecklistID: initialState.selectedChecklistID,
    }),
    setSelectedChecklistID: (state, action) => ({
      ...state,
      selectedChecklistID: action.payload,
    }),
    toggleChecklistItemStatus: (state, action) => {
      const modifiedData = toggleStatus(state, action.payload);
      return {
        ...state,
        data: modifiedData,
      };
    },
  },
});

export const {
  setChecklistData,
  setSelectedIndexName,
  setSelectedChecklistID,
  toggleChecklistItemStatus,
} = eclSlice.actions;

export default eclSlice.reducer;
