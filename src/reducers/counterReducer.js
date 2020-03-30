import { INCREASE, DECREASE } from '../actions/types'

export default initialState => (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return ++state
    case DECREASE:
      return --state
    default:
      return state
  }
}
