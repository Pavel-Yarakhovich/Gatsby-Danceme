import React, { memo } from "react";
import Img from "gatsby-image";
import * as Styled from "./styled";

const NewsItem = ({ item }) => {
  const date = item.newsdate.slice(0, 10).split("-").reverse().join(".");

  return (
    <Styled.NewsWrapper>
      <Styled.NewsContainer>
        <Styled.Header>{item.title}</Styled.Header>
        <Styled.ImageWrapper>
          {item.photos.map((photo) => {
            return (
              <Styled.WrapImg key={Math.random()}>
                <Img fluid={photo.fluid} />
              </Styled.WrapImg>
            );
          })}
        </Styled.ImageWrapper>
        <Styled.Text>{item.text.content[0].content[0].value}</Styled.Text>
        <Styled.Date>{date}</Styled.Date>
      </Styled.NewsContainer>
    </Styled.NewsWrapper>
  );
};

export const News = memo(({ news }) => {
  return (
    <Styled.Container>
      {news.map(({ node }) => (
        <NewsItem key={node.id} item={node} />
      ))}
    </Styled.Container>
  );
});
