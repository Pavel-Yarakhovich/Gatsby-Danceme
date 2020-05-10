import React from "react";
import { Title, Description, ImageWrapper, TextWrapper } from "./styled";
import Img from "gatsby-image";

// import styles from "./article-preview.module.css";

export default ({ feedback }) => (
  <>
    <ImageWrapper>
      <Img alt="" fluid={feedback.image.fluid} />
    </ImageWrapper>
    <TextWrapper>
      <Title>{feedback.name}</Title>
      <Description
        dangerouslySetInnerHTML={{
          __html: feedback.text.childMarkdownRemark.html,
        }}
      />
    </TextWrapper>
  </>
);
