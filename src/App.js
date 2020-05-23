import React from "react";
import NavBar from "./components/NavBar";
import Board from "./components/Board";
import "./styles/index.css";

export default function App() {
    return(
        <div className = "game-app">
            <NavBar />
            <div className = "game-board">
                <Board />
            </div>
        </div>
    );
}