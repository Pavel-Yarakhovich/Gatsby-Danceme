import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`

export const Navigation = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 20vh;
  max-height: 100px;
  font-size: 1.25em;
  max-width: 1180px;
  margin: 0 auto;
`;

export const NavigationItem = styled.li`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;

  a {
    color: currentColor;
    text-decoration: none;
  }

  @media (max-width: 550px) {
    padding: 8px;
    box-sizing: border-box;
    margin: 0;

    a {
      font-size: 13px;
    }
  }
`;
