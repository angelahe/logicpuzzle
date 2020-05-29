import { ADD_CLUE, TOGGLE_CLUE } from "../actionTypes";

const clues = (state = [], action) => {
  switch (action.type) {
    case ADD_CLUE: 
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_CLUE: 
      return state.map(clue =>
        clue.id === action.id ? {
          ...clue, completed: !clue.completed } :clue
      )
    default: 
      return state;
  }
}

export default clues