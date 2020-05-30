import React from "react";
import NavBar from "./NavBar";
import Board from "./Board";
import AddClue from "../containers/AddClue";
import VisibleClueList from "../containers/VisibleClueList";
import Footer from "./Footer";

import "../styles/index.css";

const App = () => (
  <div className = "game-app">
    <NavBar />
    <div className = "game-board">
      <Board />
      <h1>Clue List</h1>
      <AddClue />
      <VisibleClueList />
      <Footer />
    </div>
  </div>
)

export default App