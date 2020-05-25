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


const mapStateToProps = state => {
  const { byIds, allIds } = state.clues || {};
  const clues =
    allIds && state.clues.allIds.length
      ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
      : null;
  return { clues };
};

export default connect(mapStateToProps)(ClueList);
//export default connect(state => ({ todos: getClues(state) }))(ClueList)