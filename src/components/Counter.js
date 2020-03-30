import React, { useContext } from 'react'
import { Button, Header } from 'semantic-ui-react'

import { store } from '../store'
import { INCREASE, DECREASE } from '../actions/types'

export default () => {
  const { state, dispatch } = useContext(store)
  return (
    <>
      <Header as='h2'>Counter</Header>
      <div>{state}</div>
      <Button
        content='Increase'
        icon='chevron up'
        labelPosition='left'
        onClick={() => dispatch({ type: INCREASE })}
      />
      <Button
        content='Decrease'
        icon='chevron down'
        labelPosition='left'
        onClick={() => dispatch({ type: DECREASE })}
      />
    </>
  )
}
