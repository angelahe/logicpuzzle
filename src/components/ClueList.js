import React from "react";
import PropTypes from "prop-types";
import Clue from "./Clue";
/*
const ClueList = ({ clues, toggleClue }) => (
  <ul className = "clue-list">
    {clues && clues.length
      ? clues.map(clue => 
        <Clue key={clue.id}
          {...clue}
          onClick={() => toggleClue(clue.id)} 
        />
      )
      : "No clue!"
    }
  </ul>
)
*/
//try this way:

const ClueList = ({ clues, toggleClue }) => (
  <ul>
    {clues.map(clue => 
      <Clue key={clue.id} 
      {...clue} 
      onClick={() => toggleClue(clue.id)} 
      />
    )}
  </ul>
)

ClueList.propTypes = {
  clues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleClue: PropTypes.func.isRequired
}

export default ClueList