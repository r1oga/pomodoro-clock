import React from 'react'
import { Container } from 'semantic-ui-react'

import Header from './Header'
import Footer from './Footer'

const Layout = props => {
  return (
    <Container>
      <Header />
      <Container>
        {props.children}
      </Container>
      <Footer />
    </Container>
  )
}

export default Layout
