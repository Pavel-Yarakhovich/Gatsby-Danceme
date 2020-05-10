import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 10vmin);
  margin: 0 auto;
  padding: 5vmin 0;

  @media (max-width: 550px) {
    margin: 0;
    width: 100%;
  }
`;

export const SectionHeadline = styled.h2`
  padding: 0 0 0.4em 0;
  margin: 0;

  @media (max-width: 550px) {
    padding: 0 0.4em;
  }
`
export const HeaderUnderline = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(45deg, rgb(77, 0, 122), transparent);
  margin: 0 0 5vmin 0;
`

export const ProductList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  align-items: flex-start;

  @media (max-width: 550px) {
    flex-flow: column;
    padding: 0 1em;
    box-sizing: border-box;
  }
`

export const ItemWrapper = styled.li`
  padding: 1em;
  box-sizing: border-box;
  width: 33%;
  display: flex;
  flex-flow: column;

  @media (max-width: 550px) {
    width: 100%;
    padding: 1em 0;
  }
`

