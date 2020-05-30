import { ADD_CLUE, TOGGLE_CLUE, SET_VISIBILITY_FILTER } from "../actionTypes";

let nextClueId = 0;

export const addClue = text => ({
  type: ADD_CLUE,
  id: nextClueId++,
  text
});

export const toggleClue = id => ({
  type: TOGGLE_CLUE,
  id
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER, 
  filter
});
