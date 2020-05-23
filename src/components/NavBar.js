import React from "react";
//import PropTypes from "prop-types";
import "../styles/index.css";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFocus: '',
        };
    }

    render() {
        const {
            currentFocus,
        } = this.state;

      return (
        <div className = "NavBarComp">
          <button type="button" className="NavBarBack">Puzzles</button>
          <button type="button" className="NavBarHint">Hint</button>
          <button type="button" className="NavBarUndo">Undo</button>
        </div>
      );
    }
}

export default NavBar;