import React from 'react'

import Layout from './components/Layout'
import Counter from './components/Counter'
import Controls from './components/Control'
import Display from './components/Display'

const App = () => {
  return (
    <Layout>
      <Counter />
      <Counter />
      <Display />
      <Controls />
    </Layout>
  )
}

export default App
