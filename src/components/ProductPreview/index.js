import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { ImageWrapper, Title, Article } from "./styled";

// import styles from "./article-preview.module.css";

export default ({ product }) => (
  <>
    <ImageWrapper>
      <Img alt="" fluid={product.image.fluid} />
    </ImageWrapper>
    <Title>
      <Link to={`/catalog/${product.slug}`}>{product.title}</Link>
    </Title>
    <Article>{product.article}</Article>
    <div
      dangerouslySetInnerHTML={{
        __html: product.description.childMarkdownRemark.html,
      }}
    />
  </>
);
