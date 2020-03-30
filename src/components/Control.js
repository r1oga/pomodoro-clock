import React, { useContext } from 'react'
import { Container, Button, Icon } from 'semantic-ui-react'

import { store } from '../store'
import { REDUCE, STOP, RESET, SET_TIMER_ID } from '../actions/types'

export default () => {
  const { state, dispatch } = useContext(store)
  const start = () => {
    // setInterval returns a timer ID
    dispatch({
      type: SET_TIMER_ID,
      payload: setInterval(() => {
        dispatch({ type: REDUCE })
      }, 1000)
    })
  }

  const stop = () => {
    clearInterval(state.timer)
  }

  const start_stop = () => {
    if (!state.running) {
      start()
    } else {
      stop()
    }
  }

  return (
    <Container style={{ paddingTop: '1em' }}>
      <Button.Group icon>
        <Button icon id='start_stop' onClick={start_stop}>
          <Icon name='play circle outline' size='big' />
          <Icon name='pause circle outline' size='big' />
        </Button>
        <Button icon='repeat' size='big' id='reset' />
      </Button.Group>
    </Container>
  )
}
