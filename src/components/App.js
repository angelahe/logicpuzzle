import React from "react";
import Board from "./Board";
import puzzles from "../data/example_puzzles";

import "../styles/index.css";

const App = () => (
  <div className = "game-app">
      {puzzles.map(puzzle =>
        <Board
            title={puzzle.title}
            story={puzzle.story}
            clues={puzzle.clues}
            labelSetOne={puzzle.labelSetOne}
            labelSetTwo={puzzle.labelSetTwo}
            labelSetThree={puzzle.labelSetThree}
            solution={puzzle.solution}
        />
      )}
  </div>
)

export default App