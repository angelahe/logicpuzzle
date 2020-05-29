// components/ClueList.js
import React from "react";
import PropTypes from "prop-types";
//import { connect } from "react-redux";
import Clue from "./Clue";
//import { getClues } from "../redux/selectors";
//import { toggleClue } from "../redux/actions";

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
);

ClueList.propTypes = {
  clues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}
//export default connect(state => ({ clues: getClues(state) }))(ClueList)
export default ClueList