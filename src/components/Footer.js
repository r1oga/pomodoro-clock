import React from 'react'
import { Divider, Segment, Icon } from 'semantic-ui-react'

const Footer = () => {
  return (
    <Divider horizontal>
      <Segment basic textAlign='center'>
        <p>
         Developed with {' '}
          <a
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon name='react' size='large' />
          </a>
         by {' '}
          <a
            href='https://twitter.com/r1oga'
            target='_blank'
            rel='noopener noreferrer'
          >
               @r1oga
          </a>
        </p>
        <p>
          <a
            href='https://github.com/r1oga/pomodoro-clock'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon name='github' size='large' color='black' />
          </a>
        </p>
      </Segment>
    </Divider>
  )
}

export default Footer
