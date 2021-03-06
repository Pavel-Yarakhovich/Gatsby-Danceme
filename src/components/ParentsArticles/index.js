import React, { memo } from "react";
import Img from "gatsby-image";
import * as Styled from "./styled";

const Article = ({ item }) => {
  // console.log(item);
  return (
    <Styled.NewsWrapper>
      <Styled.NewsContainer>
        <Styled.Header>{item.title}</Styled.Header>
        <Styled.ImageWrapper>
          <Styled.WrapImg>
            <Img fluid={item.image.fluid} alt="" />
          </Styled.WrapImg>
        </Styled.ImageWrapper>
        <Styled.Text>
          {item.text.content.map((item) => (
            <p key={Math.random()}>{item.content[0].value}</p>
          ))}
        </Styled.Text>
        <Styled.AdditionalLink>
          Ссылка по теме:{" "}
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.url}
          </a>
        </Styled.AdditionalLink>
      </Styled.NewsContainer>
    </Styled.NewsWrapper>
  );
};

export const ParentsArticles = memo(({ articles }) => {
  return (
    <Styled.Container>
      {articles.map((article) => (
        <Article key={article.id} item={article} />
      ))}
    </Styled.Container>
  );
});
