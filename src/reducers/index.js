import {
  INCREASE,
  DECREASE
} from '../actions/types'

export const increase = () => {
  return { type: INCREASE }
}

export const decrease = () => {
  return { type: DECREASE }
}
