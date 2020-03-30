import React from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'

import Layout from './components/Layout'
import Counter from './components/Counter'
import Controls from './components/Control'
import Display from './components/Display'

const App = () => {
  return (
    <Layout>
      <Segment>
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Counter />
            </Grid.Column>
            <Grid.Column>
              <Counter />
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
