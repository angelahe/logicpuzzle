import React from "react";
import PropTypes from "prop-types";

const Clue = ({ onClick, completed, text }) => (
  <li className = "clue-item" 
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}
  </li>
);

Clue.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
export default Clue