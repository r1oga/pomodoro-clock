import React, { useContext } from 'react'
import { Container, Button, Icon } from 'semantic-ui-react'

import { store } from '../store'
import { REDUCE, STOP, RESET, SET_TIMER_ID } from '../actions/types'

export default () => {
  const { state, dispatch } = useContext(store)

  const audio = document.getElementById('beep')

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
    dispatch({ type: STOP })
  }

  const start_stop = () => {
    if (!state.running) {
      start()
    } else {
      stop()
    }
  }

  const reset = () => {
    clearInterval(state.timer)
    audio.pause()
    audio.currentTime = 0
    dispatch({ type: RESET })
  }

  return (
    <Container style={{ paddingTop: '1em' }}>
      <Button.Group icon>
        <Button icon id='start_stop' onClick={start_stop}>
          <Icon name='play circle outline' size='big' />
          <Icon name='pause circle outline' size='big' />
        </Button>
        <Button icon='repeat' size='big' id='reset' onClick={reset} />
      </Button.Group>
    </Container>
  )
}
