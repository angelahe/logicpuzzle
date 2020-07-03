import { ADD_CLUE, TOGGLE_CLUE, SET_VISIBILITY_FILTER, 
  TOGGLE_SQUARE, INIT_GRID  
} from "../actionTypes";

let nextClueId = 0;
let nextGridNum = 0;

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

export const toggleSquare = (gridnum, index) => ({
  type: TOGGLE_SQUARE,
  gridnum,
  index
});

export const initGrid = (gridnum, gridsize) => ({
  type: INIT_GRID,
  gridnum: nextGridNum++,
  gridsize
});