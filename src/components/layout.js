import React from 'react'
import './base.css'
import Container from './container'
import Footer from '../components/Footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        {children}
        <Footer />
      </Container>
    )
  }
}

export default Template
