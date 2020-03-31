import {
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  REDUCE,
  STOP,
  RESET,
  SET_TIMER_ID,
  SET_TIME
} from '../actions/types'

// FIXME: time-left is not formatted correctly: expected '59' to equal '60'

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
    // if 0 reached, switch SESSION/BREAK
      if (state.time === 0) {
        if (!state.onBreak) {
          return { ...state, time: state.breakLength * 60, onBreak: !state.onBreak }
        } else {
          return { ...state, time: state.sessionLength * 60, onBreak: !state.onBreak }
        }
      } else {
        return { ...state, time: --state.time, running: true }
      }
    case STOP:
      return { ...state, running: false }
    case RESET:
      return { ...state, running: false, time: 25 * 60, timer: null, breakLength: 5, sessionLength: 25, onBreak: false }
    case SET_TIMER_ID:
      return { ...state, timer: action.payload }
    case SET_TIME:
      return { ...state, time: action.payload }
    default:
      return state
  }
}
