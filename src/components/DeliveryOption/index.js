import React from "react";
import { Title, Description } from "./styled";

// import styles from "./article-preview.module.css";

export default ({ option }) => (
  <>
    {/* <Styled.ImageWrapper>
      <Img alt="" fluid={article.image.fluid} />
    </Styled.ImageWrapper> */}
    <Title>
      {option.category}
    </Title>
    <Description
      dangerouslySetInnerHTML={{
        __html: option.description.childMarkdownRemark.html,
      }}
    />
  </>
);
