 import React from "react";
 import Square from "./Square";
 import FourGrid from "./FourGrid";
 import FourLabelH from "./FourLabelH";
 import NavBar from "./NavBar";
 import AddClue from "../containers/AddClue";
 import VisibleClueList from "../containers/VisibleClueList";
 import Footer from "./Footer";

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
          <div className="NavBarAndPuzzleActions">
            <NavBar />
          </div>
          <div className="PuzzleContainer d-flex flex-row">
            <div className="GridAndFillIn">
              <div className="Instructions status">{status}</div>
              <div className="PuzzleGrid">
                <div className="d-flex justify-content-start" style={{ height: '160px' }}>
                  <div className="grid-label BlankSpace"></div>
                  <div className="grid-label flex-column verticaltext">
                    <FourLabelH /> 
                  </div>
                  <div className="grid-label flex-column verticaltext">
                    <FourLabelH />
                  </div>
                </div>
                <div className="d-flex flex-row" style={{ height: '160px' }}>
                  <div className="p-2 grid-label">
                    <FourLabelH />
                  </div>
                  <div className="p-2 fourgrid">
                    <FourGrid />
                  </div>  
                  <div className="p-2 fourgrid">
                    <FourGrid />
                  </div>  
                </div>
                <div className="d-flex flex-row" style={{ height: '160px' }}>
                  <div className="grid-label flex-column">
                    <FourLabelH />
                  </div>
                  <div className="p-2 fourgrid box-2-1">
                    <FourGrid />
                  </div>
                </div>
              </div>
              <div className="FillInGrid">
                puzzle fillin here 
              </div>
            </div>
            <div className="StoryCluesProgress">
              <div className="PuzzleTitle"><h1>Puzzle Title</h1></div>
              <div className="PuzzleStory">story goes here</div>
              <div className="PuzzleClues">
                <h1>Clue List</h1>
                <AddClue />
                <VisibleClueList />
                <Footer />
              </div>
              <div className="PuzzleProgress">progress history here</div>
            </div>
          </div>
          
        </div>
      );
    }
  }
  
  export default Board;