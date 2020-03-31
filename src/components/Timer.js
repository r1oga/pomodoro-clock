import React, { useContext, useEffect } from 'react'
import { Header } from 'semantic-ui-react'

import Control from './Control'
import { store } from '../store'
import { SET_TIME } from '../actions/types'

export default () => {
  const { state, dispatch } = useContext(store)

  useEffect(() => {
    dispatch({ type: SET_TIME, payload: state.sessionLength * 60 })
  }, [state.sessionLength])

  Number.prototype.toMMSS = function () {
    let minutes = Math.floor(this / 60)
    let seconds = this - (minutes * 60)

    if (minutes < 10) { minutes = '0' + minutes }
    if (seconds < 10) { seconds = '0' + seconds }
    return minutes + ':' + seconds
  }

  return (
    <>
      <Header as='h2' id='timer-label' style={{ fontSize: '1.8em', paddingBottom: '0.5em' }}>TIMER</Header>
      <span id='time-left' style={{ fontSize: '4em', color: 'tomato' }}>{state.time == null ? 'loading' : state.time.toMMSS()}</span>
      <Control />
    </>
  )
}
