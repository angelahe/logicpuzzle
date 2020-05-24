 import React from "react";
 import Square from "./Square";
 import FourGrid from "./FourGrid";
 import Clue from "./Clue";
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
          <div className="LineContainer verticaltext">
            <div className = "box-1-1">
              <FourLabelH /> 
            </div>
            <FourLabelH />
          </div>
          <div className="LineContainer">
            <FourLabelH />
            <div className="box-1-1">
              <FourGrid />
            </div>
            <div className='box-1-2'>
              <FourGrid />
            </div>
          </div>
          <div className="LineContainer">
            <FourLabelH />
            <div className="box-2-1">
              <FourGrid />
            </div>
          </div>
          <div className="LineContainer">
            <div>
              <div className="verticaltext">Clue One</div>
              <div>this is a test of coolness</div> 
              <p className="verticaltext">one</p>
            </div>
          </div>
          <div>
            <p className="verticaltext">abc</p>
          </div>
        </div>
      );
    }
  }
  
  export default Board;