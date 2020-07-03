import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

const FourGrid = ({ grid, toggleSquare }) => (
  <div className="four-grid">
    <div className = "board-row">
      <Square key = {0} squarestate = {grid.squares[0]} 
        onClick={() => toggleSquare(grid.gridnum, 0)} 
      />
      <Square key = {1} squarestate = {grid.squares[1]} 
        onClick={() => toggleSquare(grid.gridnum, 1)} 
      />
      <Square key = {2} squarestate = {grid.squares[2]} 
        onClick={() => toggleSquare(grid.gridnum, 2)} 
      />
      <Square key = {3} squarestate = {grid.squares[3]} 
        onClick={() => toggleSquare(grid.gridnum, 3)} 
      />
    </div>
    <div className = "board-row">
      <Square key = {4} squarestate = {grid.squares[4]} 
        onClick={() => toggleSquare(grid.gridnum, 4)} 
      />
      <Square key = {5} squarestate = {grid.squares[5]} 
        onClick={() => toggleSquare(grid.gridnum, 5)} 
      />
      <Square key = {6} squarestate = {grid.squares[6]} 
        onClick={() => toggleSquare(grid.gridnum, 6)} 
      />
      <Square key = {7} squarestate = {grid.squares[7]} 
        onClick={() => toggleSquare(grid.gridnum, 7)} 
      />
    </div>
    <div className = "board-row">
      <Square key = {8} squarestate = {grid.squares[8]} 
        onClick={() => toggleSquare(grid.gridnum, 8)} 
      />
      <Square key = {9} squarestate = {grid.squares[9]} 
        onClick={() => toggleSquare(grid.gridnum, 9)} 
      />
      <Square key = {10} squarestate = {grid.squares[10]} 
        onClick={() => toggleSquare(grid.gridnum, 10)} 
      />
      <Square key = {11} squarestate = {grid.squares[11]} 
        onClick={() => toggleSquare(grid.gridnum, 11)} 
      />
    </div>
    <div className = "board-row">
      <Square key = {12} squarestate = {grid.squares[12]} 
        onClick={() => toggleSquare(grid.gridnum, 12)} 
      />
      <Square key = {13} squarestate = {grid.squares[13]} 
        onClick={() => toggleSquare(grid.gridnum, 13)} 
      />
      <Square key = {14} squarestate = {grid.squares[14]} 
        onClick={() => toggleSquare(grid.gridnum, 14)} 
      />
      <Square key = {15} squarestate = {grid.squares[15]} 
        onClick={() => toggleSquare(grid.gridnum, 15)} 
      />
    </div> 
  </div>
)

FourGrid.propTypes = {
  grid: React.PropTypes.shape({
    gridnum: PropTypes.number.isRequired,
    gridsize: PropTypes.number.isRequired,
    squares: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  toggleSquare: PropTypes.func.isRequired
}

export default FourGrid