import React, { createContext, useReducer } from 'react'

import counterReducer from './reducers/counterReducer'

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  running: false,
  time: null,
  timer: null
}
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
