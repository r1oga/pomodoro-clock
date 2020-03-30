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
      >
        {`${type.toUpperCase()}(S)`}
      </Header>
      <Button
        fluid
        icon='chevron up'
        size='big'
        onClick={() => dispatch({ type: `INCREMENT_${type.toUpperCase()}` })}
        id={`${type}-increment`}
      />
      <div
        style={{ textAlign: 'center', fontSize: '1.5em', color: 'tomato', padding: '0.5em 0.5em' }}
        id={`${type}-length`}
      >
        {type === 'break' ? +state.breakLength : +state.sessionLength}
      </div>
      <Button
        fluid
        icon='chevron down'
        size='big'
        onClick={() => dispatch({ type: `DECREMENT_${type.toUpperCase()}` })}
        id={`${type}-decrement`}
      />
    </>
  )
}
