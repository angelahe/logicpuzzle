 import React from "react";
 import Square from "./Square";
 import FourGrid from "./FourGrid";

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
          <div className="box-1">
            <FourGrid />
          </div>
          <div>
            <div>
              <div classname="vertical">Clue One</div>
              <div>this is a test of coolness</div> 
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Board;