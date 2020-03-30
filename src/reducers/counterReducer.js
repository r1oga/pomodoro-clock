import {
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  REDUCE
} from '../actions/types'

export default (state, action) => {
  switch (action.type) {
    case INCREMENT_BREAK:
      return { ...state, breakLength: Math.min(++state.breakLength, 60) }
    case DECREMENT_BREAK:
      return { ...state, breakLength: Math.max(--state.breakLength, 1) }
    case INCREMENT_SESSION:
      return { ...state, sessionLength: Math.min(++state.sessionLength, 60) }
    case DECREMENT_SESSION:
      return { ...state, sessionLength: Math.max(--state.sessionLength, 1) }
    case REDUCE:
      return { ...state, time: Math.max(0, --state.time) }
    default:
      return state
  }
}
