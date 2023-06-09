import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filterState',

  initialState: { filter: '' },

  reducers: {
    filterQuery(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterQuery } = filterSlice.actions;

export default filterSlice.reducer;

//Selector
export const getFilter = state => state.filterQuery.filter;