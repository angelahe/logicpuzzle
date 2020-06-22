import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

const FourGrid = ({ gridnum, squares, toggleSquare }) => (
  <div className="four-grid">
    <div className = "board-row">
      <Square key = {0} value = {squares[0]} 
        onClick={() => toggleSquare(gridnum, 0)} 
      />
      <Square key = {1} value = {squares[1]} 
        onClick={() => toggleSquare(gridnum, 1)} 
      />
      <Square key = {2} value = {squares[2]} 
        onClick={() => toggleSquare(gridnum, 2)} 
      />
      <Square key = {3} value = {squares[3]} 
        onClick={() => toggleSquare(gridnum, 3)} 
      />
    </div>
    <div className = "board-row">
      <Square key = {0} value = {squares[4]} 
        onClick={() => toggleSquare(gridnum, 4)} 
      />
      <Square key = {1} value = {squares[5]} 
        onClick={() => toggleSquare(gridnum, 5)} 
      />
      <Square key = {2} value = {squares[6]} 
        onClick={() => toggleSquare(gridnum, 6)} 
      />
      <Square key = {3} value = {squares[7]} 
        onClick={() => toggleSquare(gridnum, 7)} 
      />
    </div>
    <div className = "board-row">
      <Square key = {0} value = {squares[8]} 
        onClick={() => toggleSquare(gridnum, 8)} 
      />
      <Square key = {1} value = {squares[9]} 
        onClick={() => toggleSquare(gridnum, 9)} 
      />
      <Square key = {2} value = {squares[10]} 
        onClick={() => toggleSquare(gridnum, 10)} 
      />
      <Square key = {3} value = {squares[11]} 
        onClick={() => toggleSquare(gridnum, 11)} 
      />
    </div>
    <div className = "board-row">
      <Square key = {0} value = {squares[12]} 
        onClick={() => toggleSquare(gridnum, 12)} 
      />
      <Square key = {1} value = {squares[13]} 
        onClick={() => toggleSquare(gridnum, 13)} 
      />
      <Square key = {2} value = {squares[14]} 
        onClick={() => toggleSquare(gridnum, 14)} 
      />
      <Square key = {3} value = {squares[15]} 
        onClick={() => toggleSquare(gridnum, 15)} 
      />
    </div> 
  </div>
)

FourGrid.propTypes = {
  gridnum: PropTypes.number.isRequired,
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleSquare: PropTypes.func.isRequired
}

export default FourGrid