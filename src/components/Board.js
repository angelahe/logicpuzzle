 import React from "react";
 import Square from "./Square";
 import FourGrid from "./FourGrid";
 import FourLabelH from "./FourLabelH";

 class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      };
    }

    renderSquare(i) {
      return <Square value={this.state.squares[i]} />;
    }
  
    render() {
      const status = 'Click once for X, again for O, again for blank:';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="d-flex flex-row" style={{ height: '150px' }}>
            <div className="align-self-end p-2 verticaltext"></div>
            <div className="align-self-end p-2 verticaltext">
              <FourLabelH /> 
            </div>
            <div className="align-self-end p-2 verticaltext">
              <FourLabelH />
            </div>
          </div>
          <div className="d-inline-flex flex-row" style={{ height: '150px' }}>
              <FourLabelH />
              <FourGrid />
              <FourGrid />
                      </div>
          <div className="d-inline-flex flex-row" style={{ height: '100px' }}>
            <FourLabelH />
            <div className="p-2 box-2-1">
              <FourGrid />
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Board;