import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "aaa",
  initialState: {
    resultSearch: [],
    loading: "",
  },
  reducers: {
    fetchSearch: (state) => {
      state.loading = "loading";
    },
    setSearch: (state, { payload: results }) => {
      state.loading = "success";
      state.resultSearch = results;
    },
    fetchErrorSearch: (state) => {
      state.loading = "error";
    },
  },
});

const selectSearchState = (state) => state.searchResults;

export const selectSearchResults = (state) =>
  selectSearchState(state).resultSearch;
export const selectLoadingSearch = (state) => selectSearchState(state).loading;

export const { fetchSearch, setSearch, fetchErrorSearch } = searchSlice.actions;
export default searchSlice.reducer;
