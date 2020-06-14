import React from "react"; 
import PropTypes from "prop-types";

// import { connect } from "react-redux";

const Square = ({ onClick, squarestate }) => (
  <button className="square" 
    onClick={onClick}
  >
    {squarestate}
  </button>
)

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  squarestate: PropTypes.string.isRequired
}

export default Square