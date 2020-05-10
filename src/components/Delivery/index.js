import React from "react";
import DeliveryOption from "../DeliveryOption";
import {
  Wrapper,
  SectionHeadline,
  ProductList,
  ItemWrapper,
  HeaderUnderline,
} from "./styled";

export default ({ options, id }) => {
  return (
    <Wrapper id={id}>
      <SectionHeadline>Доставка</SectionHeadline>
      <HeaderUnderline />
      <ProductList>
        {options.map(({ node }) => {
          return (
            <ItemWrapper key={node.category}>
              <DeliveryOption option={node} />
            </ItemWrapper>
          );
        })}
      </ProductList>
    </Wrapper>
  );
};
