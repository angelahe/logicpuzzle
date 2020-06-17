import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

const FourGrid = ({ gridnum, squares, toggleSquare }) => (
  <div className="four-grid">
    <div className = "board-row">
      <Square key = {0} value = {squares[gridnum][0]} 
        onClick={() => toggleSquare(gridnum, 0)} 
      />
      <Square key = {1} value = {squares[gridnum][1]} 
        onClick={() => toggleSquare(gridnum, 1)} 
      />
      <Square key = {2} value = {squares[gridnum][2]} 
        onClick={() => toggleSquare(gridnum, 2)} 
      />
      <Square key = {3} value = {squares[gridnum][3]} 
        onClick={() => toggleSquare([gridnum], 3)} 
      />
    </div>
    <div className = "board-row">
      <Square key = {0} value = {squares[gridnum][4]} 
        onClick={() => toggleSquare(gridnum, 4)} 
      />
      <Square key = {1} value = {squares[gridnum][5]} 
        onClick={() => toggleSquare(gridnum, 5)} 
      />
      <Square key = {2} value = {squares[gridnum][6]} 
        onClick={() => toggleSquare(gridnum, 6)} 
      />
      <Square key = {3} value = {squares[gridnum][7]} 
        onClick={() => toggleSquare([gridnum], 7)} 
      />
    </div>
    <div className = "board-row">
      <Square key = {0} value = {squares[gridnum][8]} 
        onClick={() => toggleSquare(gridnum, 8)} 
      />
      <Square key = {1} value = {squares[gridnum][9]} 
        onClick={() => toggleSquare(gridnum, 9)} 
      />
      <Square key = {2} value = {squares[gridnum][10]} 
        onClick={() => toggleSquare(gridnum, 10)} 
      />
      <Square key = {3} value = {squares[gridnum][11]} 
        onClick={() => toggleSquare([gridnum], 11)} 
      />
    </div>
    <div className = "board-row">
      <Square key = {0} value = {squares[gridnum][12]} 
        onClick={() => toggleSquare(gridnum, 12)} 
      />
      <Square key = {1} value = {squares[gridnum][13]} 
        onClick={() => toggleSquare(gridnum, 13)} 
      />
      <Square key = {2} value = {squares[gridnum][14]} 
        onClick={() => toggleSquare(gridnum, 14)} 
      />
      <Square key = {3} value = {squares[gridnum][15]} 
        onClick={() => toggleSquare([gridnum], 15)} 
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