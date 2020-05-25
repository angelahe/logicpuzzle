// components/ClueList.js
import React from "react";
import { connect } from "react-redux";
import Clue from "./Clue";

const ClueList = ({ clues }) => (
  <ul className = "clue-list">
    {clues && clues.length
      ? clues.map((clue, index) => {
        return <Clue key={`clue-${clue.id}`} clue={clue} />;
      })
      : "No clues"
    }
  </ul>
);

const mapStateToProps = state => {
  const clues = 
}