import { connect } from "react-redux";
import { toggleSquare } from "../redux/actions";
import  PuzzleGrid from "../components/PuzzleGrid";

//will hold history actions later
const getGridState = (grids) => {
  return grids
}

const mapStateToProps = state => ({
  grids: getGridState(state.grids)
})

const mapDispatchToProps = dispatch => ({
  toggleSquare: (gridnum, index) => dispatch(toggleSquare(gridnum, index))
})

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleGrid)