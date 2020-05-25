import React from "react";
import NavBar from "./components/NavBar";
import Board from "./components/Board";
import AddClue from "./components/AddClue";
import ClueList from "./components/ClueList";

import "./styles/index.css";

export default function App() {
    return(
        <div className = "game-app">
            <NavBar />
            <div className = "game-board">
                <Board />
                <h1>Clue List</h1>
                <AddClue />
                <ClueList />
            </div>
        </div>
    );
}