import React from "react";
import Img from "gatsby-image";
import * as Styled from "./styled";

export default ({ title, url, image }) => {
  // console.log("image", image);
  return (
    <Styled.Wrapper>
      <Styled.OuterLink href={url} title={title} target="_blank">
        <Styled.WrapImage>
          <Img alt="" fluid={image.fluid} />
        </Styled.WrapImage>
      </Styled.OuterLink>
    </Styled.Wrapper>
  );
};
