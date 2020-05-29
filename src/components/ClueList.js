// components/ClueList.js
import React from "react";
import { connect } from "react-redux";
import Clue from "./Clue";
import { getClues } from "../redux/selectors";

const ClueList = ({ clues }) => (
  <ul className = "clue-list">
    {clues && clues.length
      ? clues.map((clue, index) => {
        return <Clue key={`clue-${clue.id}`} clue={clue} />;
      })
      : "No clue!"
    }
  </ul>
);

export default connect(state => ({ clues: getClues(state) }))(ClueList)