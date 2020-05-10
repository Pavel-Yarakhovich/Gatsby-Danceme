import styled from "styled-components";

export const Wrapper = styled.div`
  width: 240px;
  padding: 51px;
  box-sizing: border-box;
`

export const ImageWrapper = styled.div`
  width: 80%;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2vmin;

  @media (max-width: 1022px) {
    width: 170px;
    flex-shrink: 0;
  }
`;

export const Title = styled.h3`
  font-size: 1.5em;
  margin: 0.5em 0;
  text-align: center;
`

export const Description = styled.div`
  text-align: center;
  letter-spacing: 0.03em;
  
  p {
    margin: .5em;
  }

  @media (max-width: 1022px) {
    text-align: left;

    p {
      margin: 0;
    }
  }

  @media (max-width: 550px) {
    text-align: center;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-flow: column;

  @media (max-width: 1022px) {
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 30px;
  }

  @media (max-width: 550px) {
    align-items: center;
    padding-left: 0;
  }
`