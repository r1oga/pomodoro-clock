import {
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION
} from '../actions/types'

export default (state, action) => {
  switch (action.type) {
    case INCREMENT_BREAK:
      return { ...state, breakLength: ++state.breakLength }
    case DECREMENT_BREAK:
      return { ...state, breakLength: --state.breakLength }
    case INCREMENT_SESSION:
      return { ...state, sessionLength: ++state.sessionLength }
    case DECREMENT_SESSION:
      return { ...state, sessionLength: --state.sessionLength }
    default:
      return state
  }
}
