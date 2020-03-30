import React, { useContext } from 'react'
import { Button, Header } from 'semantic-ui-react'

import { store } from '../store'

export default ({ type }) => {
  const { state, dispatch } = useContext(store)
  return (
    <>
      <Header
        as='h2'
        style={{ textAlign: 'center' }}
        id={`${type}-label`}
      >Counter
      </Header>
      <div
        style={{ textAlign: 'center' }}
        id={`${type}-length`}
      >
        {type === 'break' ? state.breakLength : state.sessionLength}
      </div>
      <Button
        fluid
        icon='chevron up'
        size='big'
        onClick={() => dispatch({ type: `INCREMENT_${type.toUpperCase()}` })}
        style={{ margin: '1em 0 0 0' }}
        id={`${type}-increment`}
      />
      <Button
        fluid
        icon='chevron down'
        size='big'
        onClick={() => dispatch({ type: `DECREMENT_${type.toUpperCase()}` })}
        style={{ margin: '1em 0 0 0' }}
        id={`${type}-decrement`}
      />
    </>
  )
}
