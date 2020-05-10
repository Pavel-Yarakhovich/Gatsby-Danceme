import React from 'react'
// import Img from 'gatsby-image'
import { Illustration, Title, Motto, Image } from './styled'

export default ({ data }) => (
  <Illustration>
    <Title>{data.title}</Title>
    <Image
      // className={styles.heroImage}
      alt={data.title}
      fluid={data.logo.fluid}
    />
    <Motto>{data.motto}</Motto>
  </Illustration>
)
