import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleClue } from "../redux/actions";

const Clue = ({ clue, toggleClue }) => (
  <li className = "clue-item" onClick={() => toggleClue(clue.id)}>
    {clue && clue.completed ? "_" : "X"}{" "}
    <span
      className={cx(
        "clue-item__text",
        clue && clue.completed && "todo-item__text--completed"
      )}
    >
      {clue.content}
    </span>
  </li>
);

export default connect(
  null,
  { toggleClue }
)(Clue);