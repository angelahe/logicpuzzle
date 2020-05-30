import { connect } from 'react-redux'
import { toggleClue } from '../redux/actions'
import ClueList from '../components/ClueList'
import { VISIBILITY_FILTERS } from '../constants'

const getVisibleClues = (clues, filter) => {
  switch (filter) {
    case VISIBILITY_FILTERS.SHOW_ALL:
      return clues
    case VISIBILITY_FILTERS.SHOW_COMPLETED:
      return clues.filter(c => c.completed)
    case VISIBILITY_FILTERS.SHOW_ACTIVE:
      return clues.filter(c => !c.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
    clues: getVisibleClues(state.clues, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleClue: id => dispatch(toggleClue(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClueList)