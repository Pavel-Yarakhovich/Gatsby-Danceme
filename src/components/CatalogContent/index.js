import React, { useState, useEffect } from "react";
import ProductSmallView from "../ProductSmallView";
import Paginator from "../Paginator";
import * as Styled from "./styled";

export default ({ products }) => {
  const [currPage, setCurrPage] = useState(0);
  const itemsPerPage = 3;
  const handlePrev = () => setCurrPage((prevState) => prevState - 1);
  const handleNext = () => setCurrPage((prevState) => prevState + 1);

  const handlePressPrev = (e) => {
    if (e.key === "Enter") handlePrev();
  };
  const handlePressNext = (e) => {
    if (e.key === "Enter") handleNext();
  };

  useEffect(
    () =>
      console.log("catcont", products),
    [products]
  );

  return (
    <Styled.Wrapper>
      <Styled.SectionHeadline>Последние поступления</Styled.SectionHeadline>
      <Styled.HeaderUnderline />
      <Styled.ProductList>
        {products
          .slice(currPage * itemsPerPage, currPage * itemsPerPage + itemsPerPage)
          .map(({ node }) => {
            return (
              <Styled.ProductWrapper key={node.slug}>
                <ProductSmallView article={node} />
              </Styled.ProductWrapper>
            );
          })}
      </Styled.ProductList>
      <Paginator
        elements={products}
        itemsPerPage={itemsPerPage}
        currentPage={currPage}
        prevClicked={handlePrev}
        prevPressed={handlePressPrev}
        nextClicked={handleNext}
        nextPressed={handlePressNext}
      />
    </Styled.Wrapper>
  );
};
