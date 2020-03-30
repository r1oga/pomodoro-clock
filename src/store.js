import React, { createContext, useReducer } from 'react'

import counterReducer from './reducers/counterReducer'

const initialState = 10
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer(initialState), initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
