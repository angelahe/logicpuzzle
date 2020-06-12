import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

const FourGrid = ({ gridnum, squares, toggleSquare }) => (
  <div className="four-grid">
    <div className = "board-row">
      {squares.slice(0, 4).map((square, index) =>
      <Square key={index}
        {...square} 
        onClick={() => toggleSquare(gridnum, square.id)}
      />
      )
      }
    </div>
    <div className = "board-row">
      {squares.slice(4, 8).map((square, index) =>
      <Square key={index}
        {...square} 
        onClick={() => toggleSquare(gridnum, square.id)}
      />
      )
      }
    </div>
    <div className = "board-row">
      {squares.slice(8, 12).map((square, index) =>
      <Square key={index}
        {...square} 
        onClick={() => toggleSquare(gridnum, square.id)}
      />
      )
      }
    </div>
    <div className = "board-row">
      {squares.slice(12, 16).map((square, index) =>
      <Square key={index}
        {...square} 
        onClick={() => toggleSquare(gridnum, square.id)}
      />
      )
      }
    </div>
  </div>
)

FourGrid.propTypes = {
  grids: PropTypes.arrayOf(
    PropTypes.shape({
      gridnum: PropTypes.number.isRequired,
      gridsize: PropTypes.number.isRequired,
      squares: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
  ).isRequired,
  toggleSquare: PropTypes.func.isRequired
}

export default FourGrid