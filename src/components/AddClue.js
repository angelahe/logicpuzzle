// components/AddClue.js

import React from "react";
import { connect } from "react-redux";
import { addClue } from "../redux/actions";

class AddClue extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: ""};
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddClue = () => {
    this.props.addClue(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-clue" onClick={this.handleAddClue}>
          Add Clue
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addClue }
)(AddClue);