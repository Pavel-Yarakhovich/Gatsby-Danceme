import React from "react";
import ProductPreview from "../ProductPreview";
import { Wrapper, SectionHeadline, ProductList, ItemWrapper, HeaderUnderline } from "./styled";

export default ({ products }) => (
  <Wrapper>
    <SectionHeadline>Каталог</SectionHeadline>
    <HeaderUnderline />
    <ProductList>
      {products.map(({ node }) => {
        return (
          <ItemWrapper key={node.article}>
            <ProductPreview product={node} />
          </ItemWrapper>
        );
      })}
    </ProductList>
  </Wrapper>
);
