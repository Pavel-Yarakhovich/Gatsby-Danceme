import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    width: 25%;
  }
  @media (max-width: 1000px) {
    width: 20%;
  }
  @media (max-width: 800px) {
    width: 33%;
  }
  @media (max-width: 500px) {
    width: 50%;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`

export const OuterLink = styled.a`
  background-size: cover;
  width: 100%;
  height: 120px;
  border-radius: 25px;
  box-shadow: 0 0 5px grey;
  overflow: hidden;
`

export const WrapImage = styled.div``