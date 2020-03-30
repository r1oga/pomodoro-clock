import React from 'react'

import { Divider, Segment, Icon } from 'semantic-ui-react'

const Header = () => {
  return (
    <Divider horizontal>
      <Segment basic textAlign='center'>
        <Icon name='time' size='large' />
        {' '}Pomodoro Clock{' '}
        <Icon name='time' size='large' />
      </Segment>
    </Divider>
  )
}

export default Header
