import React from 'react'
// import Img from 'gatsby-image'
import { Container, Description } from './styled'

export default ({ data }) => (
  <Container>
    <Description
      dangerouslySetInnerHTML={{
        __html: data.description.childMarkdownRemark.html,
      }}
    />
  </Container>
)
