import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #303c6d;
`;

export const Navigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: 100px;
  font-size: 1.25em;
  max-width: 1180px;
  margin: 0 auto;
`;

export const NavigationItem = styled.li`
  display: inline-flex;
  align-items: stretch;
  margin: 0;
  transition: all 250ms ease;
  padding: 0;

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    margin: 0;
    color: white;
    text-decoration: none;
    transition: all 250ms ease;
    :hover {
      color: #ff590d;
    }
  }

  @media (max-width: 550px) {
    a {
      font-size: 13px;
    }
  }
`;
