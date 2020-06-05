import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 10vmin);
  max-width: 1180px;
  margin: 0 auto;
  padding: 5vmin 0;
  display: flex;

  @media (max-width: 1200px) {
    flex-flow: column;
  }

  @media (max-width: 550px) {
    margin: 0;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
`;

export const Links = styled.div`
  box-sizing: border-box;
  width: 20%;
  flex-shrink: 0;
  display: flex;
  flex-flow: column;
  padding-top: 20px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const WrapLinks = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px 0;
  margin-left: 20px;

  @media (max-width: 1200px) {
    width: 100%;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: 0;
  }
`;

export const Header = styled.span`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  color: #303c6d;
`;
