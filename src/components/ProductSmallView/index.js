import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { ImageWrapper, Title, Container } from "./styled";

// import styles from "./article-preview.module.css";

export default ({ article }) => (
  <Container>
    <ImageWrapper>
      <Img alt="" fluid={article.image.fluid} />
    </ImageWrapper>
    <Title>
      <Link to={`/catalog/${article.slug}`}>{article.title}</Link>
    </Title>
  </Container>
);
