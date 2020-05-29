import React from "react";
import NavBar from "./NavBar";
import Board from "./Board";
import AddClue from "../containers/AddClue";
import ClueList from "./ClueList";

import "../styles/index.css";

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