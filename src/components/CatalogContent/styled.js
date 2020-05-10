import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 10vmin);
  margin: 0 auto;
  padding: 5vmin 0;
`;

export const SectionHeadline = styled.h2`
  padding: 0 0 0.4em 0;
  margin: 0;

  @media (max-width: 550px) {
    padding: 0 0.4em;
  }
`;
export const HeaderUnderline = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(45deg, rgb(77, 0, 122), transparent);
  margin: 0 0 5vmin 0;
`;

export const ProductList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

export const ProductWrapper = styled.li`
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
  width: 20%;

  @media (max-width: 1200px) {
    width: 25%;
  }

  @media (max-width: 768px) {
    width: 33%;
  }

  @media (max-width: 680px) {
    width: 50%;
  }

  @media (max-width: 490px) {
    width: 100%;
  }
`
