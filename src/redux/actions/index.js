import { ADD_CLUE, TOGGLE_CLUE } from "../actionTypes";

let nextClueId = 0;

export const addClue = content => ({
  type: ADD_CLUE,
  payload: {
    id: ++nextClueId,
    content
  }
});

export const toggleClue = id => ({
  type: TOGGLE_CLUE,
  payload: { id }
});

