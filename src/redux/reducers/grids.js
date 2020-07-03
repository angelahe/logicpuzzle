import { INIT_GRID, TOGGLE_SQUARE, UNDO_MOVE } from "../actionTypes";

const defaultGrid = [
    { gridnum: 0,
      gridsize: 16,
      squares: Array(16).fill(' ')},
    { gridnum: 1,
      gridsize: 16,
      squares: Array(16).fill(' ')}, 
    { gridnum: 2,
      gridsize: 16,
      squares: Array(16).fill(' ')}
    ]


const grids = (state = defaultGrid, action) => {
  switch (action.type) {
    /*TODO - need to figure out how to call this, with multiple gridsizes*/
    case INIT_GRID:
      return [
        ...state,
        {
          gridnum: action.gridnum,
          gridsize: action.gridsize,
          squares: Array(action.gridsize).fill(' ')
        }
      ]
    case TOGGLE_SQUARE:
      /* try to make a copy of slice of state before change 
      let newgrids = ...state.grids[gridnum].squares
      */
      /*make a copy of grids */
      let changeGrid = [...state] 

      /*change state in the square that was toggled */
      switch (changeGrid[action.gridnum].squares[action.index]) {
        case ' ':
          changeGrid[action.gridnum].squares[action.index] = 'X';
          break;
        case 'X':
          changeGrid[action.gridnum].squares[action.index] = 'O';
          break;
        case 'O':
          changeGrid[action.gridnum].squares[action.index] = ' ';
          break;
        default:
          changeGrid[action.gridnum].squares[action.index] = ' '
      }
      /*return copy of grid including the change*/
      return changeGrid
    case UNDO_MOVE:
      return state
    default:
      return state
  }
}

export default grids

/* from square component, state was:
constructor(props) {
        super(props);
        this.state =  {
            value: null,
        };
    }

    render() {
      return (
        <button className="square" onClick={() => this.setState({value: 'X'})}>
          {this.state.value}
        </button>
      );
    }

  from fourgrid state was:
    constructor(props) {
    super(props);
    this.state = {
      squares: Array(16).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value = {this.state.squares[i]} />;
  }
   render() {
    return (
      <div className="four-grid">
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}  
        </div>
  */