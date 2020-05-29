import { ADD_CLUE, TOGGLE_CLUE } from "../actionTypes";

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

