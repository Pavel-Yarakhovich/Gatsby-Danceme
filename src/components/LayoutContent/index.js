import React from "react";
import HelpfulLink from "../../components/HelpfulLink";
import * as Styled from "./styled";

export default ({ children, links }) => {
  // console.log("links", links);
  return (
    <Styled.Wrapper>
      <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
      <Styled.Links>
        <Styled.Header>Полезные ссылки</Styled.Header>
        <Styled.WrapLinks>
          {links.map(({ node }) => (
            <HelpfulLink
              key={node.id}
              image={node.image}
              url={node.url}
              title={node.title}
            />
          ))}
        </Styled.WrapLinks>
      </Styled.Links>
    </Styled.Wrapper>
  );
};
