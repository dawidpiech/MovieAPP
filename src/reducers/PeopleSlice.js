import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    popularPeople: [],
    personDetails: [],
    personCastCrew: [],
    loading: "",
  },
  reducers: {
    fetchPopularPeople: (state) => {
      state.loading = "loading";
    },
    setPopularPeople: (state, { payload: popularPeople }) => {
      state.popularPeople = popularPeople;
      state.loading = "success";
    },
    fetchErrorPopularPeople: (state) => {
      state.loading = "error";
    },
    fetchPersonDetails: (state) => {
      state.loading = "loading";
    },
    setPersonDetails: (state, { payload: personDetails }) => {
      state.personDetails = personDetails;
      state.loading = "success";
    },
    fetchErrorPersonDetails: (state) => {
      state.loading = "error";
    },
    fetchPersonCastCrew: (state) => {
      state.loading = "loading";
    },
    setPersonCastCrew: (state, { payload: personCastCrew }) => {
      state.personCastCrew = personCastCrew;
      state.loading = "success";
    },
    fetchErrorPersonCastCrew: (state) => {
      state.loading = "error";
    },
  },
});

const selectPopularPeopleState = (state) => state.popularPeople;
const selectPersonDetailsState = (state) => state.personDetails;
const selectPersonCastCrewState = (state) => state.personCastCrew;

export const selectPopularPeople = (state) =>
  selectPopularPeopleState(state).popularPeople;
export const selectPersonDetails = (state) =>
  selectPopularPeopleState(state).personDetails;
export const selectPersonCastCrew = (state) =>
  selectPersonCastCrewState(state).personCastCrew;

export const selectLoadingPopularPeople = (state) =>
  selectPopularPeopleState(state).loading;
export const selectLoadingPersonDetails = (state) =>
  selectPersonDetailsState(state).loading;
export const selectLoadingCastCrew = (state) =>
  selectPersonCastCrewState(state).loading;

export const {
  fetchPopularPeople,
  setPopularPeople,
  fetchErrorPopularPeople,
  fetchPersonDetails,
  setPersonDetails,
  fetchErrorPersonDetails,
  fetchPersonCastCrew,
  setPersonCastCrew,
  fetchErrorPersonCastCrew,
} = peopleSlice.actions;

export default peopleSlice.reducer;
