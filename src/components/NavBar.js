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
        <div className = "NavBarComp d-flex bd-highlight">
          <button type="button" className="NavBarBack p-4 bd-highlight col-style">Puzzles</button>
          <button type="button" className="NavBarHint p-2 bd-highlight col-style">Hint</button>
          <button type="button" className="NavBarUndo p-2 bd-highlight col-style">Undo</button>
        </div>
      );
    }
}

export default NavBar;