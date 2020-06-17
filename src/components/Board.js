 import React from "react";
 import PropTypes from "prop-types";
 import GridView from "../containers/GridView";
 import NavBar from "./NavBar";
 import AddClue from "../containers/AddClue";
 import VisibleClueList from "../containers/VisibleClueList";
 import Footer from "./Footer";
 
 const status = 'Click once for X, again for O, again for blank:';
 
 const Board = ({ grids }) => (
  <div>
    <div className="NavBarAndPuzzleActions">
      <NavBar />
    </div>
    <div className="PuzzleContainer d-flex flex-row">
      <div className="GridAndFillIn">
        <div className="Instructions status">{status}</div>
        <div>
          <GridView />
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
 )
  
/*Board.propTypes = {
  title: PropTypes.string.isRequired,
  story: PropTypes.string.isRequired,
}
*/

export default Board;

