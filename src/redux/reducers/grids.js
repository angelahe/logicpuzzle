import { INIT_GRID, TOGGLE_SQUARE, UNDO_MOVE } from "../actionTypes";

const defaultGrid = [
    { gridnum: 0,
      gridsize: 16,
      squares: Array(16).fill(null)},
    { gridnum: 0,
      gridsize: 16,
      squares: Array(16).fill(null)}, 
    { gridnum: 0,
      gridsize: 16,
      squares: Array(16).fill(null)}
    ]


const grids = (state = defaultGrid, action) => {
  switch (action.type) {
    case INIT_GRID:
      return [
        ...state,
        {
          gridnum: action.gridnum,
          gridsize: action.gridsize,
          squares: Array(action.gridsize).fill(null)
        }
      ]
    case TOGGLE_SQUARE:
        /* try to make a copy of slice of state before change 
        let newgrids = ...state.grids[gridnum].squares
        */
        switch (grids[action.gridnum].squares[action.index]) {
          case '':
            grids[action.gridnum].squares[action.index] = 'X';
            break;
          case 'X':
            grids[action.gridnum].squares[action.index] = 'O';
            break;
          case 'O':
            grids[action.gridnum].squares[action.index] = '';
            break;
          default:
            grids[action.gridnum].squares[action.index] = ''
        }
      return state
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