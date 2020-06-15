import React from "react";
import PropTypes from "prop-types";
import FourGrid from "./FourGrid";
import FourLabelH from "./FourLabelH"

const PuzzleGrid = ({ grids, toggleSquare }) => (
  <div className="PuzzleGrid">
    <div className="d-flex justify-content-start" style={{ height: '165px' }}>
      <div className="grid-label BlankSpace"></div>
      <div className="grid-label flex-column verticaltext">
        <FourLabelH /> 
      </div>
      <div className="grid-label flex-column verticaltext">
        <FourLabelH />
      </div>
    </div>
    <div className="d-flex flex-row" style={{ height: '165px' }}>
      <div className="p-2 grid-label">
        <FourLabelH />
      </div>
      <div className="p-2 fourgrid">
        <FourGrid key={0} {...grids[0]} />
      </div>  
      <div className="p-2 fourgrid">
        <FourGrid key={1} {...grids[1]} />
      </div>  
    </div>
    <div className="d-flex flex-row" style={{ height: '165px' }}>
      <div className="grid-label flex-column">
        <FourLabelH />
      </div>
      <div className="p-2 fourgrid box-2-1">
        <FourGrid key={2} {...grids[2]} />
      </div>
    </div>
  </div>

)

PuzzleGrid.propTypes = {
  grids: PropTypes.arrayOf(
    PropTypes.shape({
      gridnum: PropTypes.number.isRequired,
      gridsize: PropTypes.number.isRequired,
      squares: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
  ).isRequired,
  toggleSquare: PropTypes.func.isRequired
}

export default PuzzleGrid