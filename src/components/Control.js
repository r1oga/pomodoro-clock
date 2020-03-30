import React, { useContext } from 'react'
import { Container, Button, Icon } from 'semantic-ui-react'

import { store } from '../store'
import { REDUCE } from '../actions/types'

export default () => {
  const { state, dispatch } = useContext(store)
  const start = () => {
    if (!state.running) {
      state.timer = setInterval(() => {
        dispatch({ type: REDUCE })
      }, 1000)
    }
  }

  return (
    <Container style={{ paddingTop: '1em' }}>
      <Button.Group icon>
        <Button icon id='start_stop' onClick={start}>
          <Icon name='play circle outline' size='big' />
          <Icon name='pause circle outline' size='big' />
        </Button>
        <Button icon='repeat' size='big' id='reset' />
      </Button.Group>
    </Container>
  )
}
