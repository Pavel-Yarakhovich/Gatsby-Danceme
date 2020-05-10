import React from "react";
import {
  Wrapper,
  SectionHeadline,
  ProductList,
  ItemWrapper,
  HeaderUnderline,
} from "./styled";
import Feedback from "../Feedback";



export default ({ feedbacks }) => {

  return(
  <Wrapper id="feedbacks">
    <SectionHeadline>Отзывы</SectionHeadline>
    <HeaderUnderline />
    <ProductList>
      {feedbacks.map(({ node }) => {
        return (
          <ItemWrapper key={node.article}>
            <Feedback feedback={node} />
          </ItemWrapper>
        );
      })}
    </ProductList>
  </Wrapper>
)};
