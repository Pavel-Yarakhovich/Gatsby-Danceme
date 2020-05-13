import React from "react";
// import Img from 'gatsby-image'
import { Wrapper, Illustration, Title, Motto, Image } from "./styled";

export default ({ data }) => (
  <Wrapper>
    <Illustration>
      <Title>{data.title}</Title>
      <Image
        // className={styles.heroImage}
        alt={data.title}
        fluid={data.logo.fluid}
      />
      <Motto>{data.motto}</Motto>
    </Illustration>
  </Wrapper>
);
