import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.8em;
  box-sizing: border-box;
  max-width: 1180px;
  margin: 0 auto;
`;

export const Description = styled.div`
  margin: .4em 0;
  font-size: 2em;
  font-weight: 400;
  line-height: 1;
  color: black;
  letter-spacing: .04em;
  line-height: 1.5;

  p {
    margin: .5em 0;
    :last-child {
      color: rgb(77, 0, 122);
    }
  }

  @media (max-width: 550px) {
    align-self: center;
    font-size: 1.3em;
  }
`;

