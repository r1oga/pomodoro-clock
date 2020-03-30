import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

import Layout from './Layout'
import Counter from './Counter'
import Controls from './Control'
import Display from './Display'

const App = () => {
  return (
    <Layout>
      <Segment>
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Counter type='break' />
            </Grid.Column>
            <Grid.Column>
              <Counter type='session' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Display />
      <Controls />
    </Layout>
  )
}

export default App
