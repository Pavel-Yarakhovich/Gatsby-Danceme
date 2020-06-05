import styled from "styled-components";
import Img from "gatsby-image";
import HeaderBg from "../../images/header_picture.jpg";

export const Wrapper = styled.div`
  width: 100%;
  background: url(${HeaderBg}) no-repeat center center;
  background-size: cover;
  position: relative;

  :after {
    position: absolute;
    z-index: 1;
    content: " ";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .3);
  }
`

export const Illustration = styled.div`
position: relative;
z-index: 2;
  color: #fff;
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.8em;
  box-sizing: border-box;
  max-width: 1180px;
  margin: 0 auto;
  background-color: linear-gradient(90deg, transparent 10%, rgba(255, 255, 255, .6) 90%, transparent); 

  @media (max-width: 550px) {
    padding: 1em;
  }
`;

export const Title = styled.h2`
  margin: .4em 0;
  font-size: 2em;
  font-weight: 600;
  line-height: 1;
  color: #303C6D;

  @media (max-width: 550px) {
    align-self: center;
    font-size: 2em;
  }
`;

export const Motto = styled.p`
  margin: .4em 0;
  font-family: Marck;
  font-size: 1.4em;
  line-height: 1.14;
  font-weight: 300;
  letter-spacing: 0.02em;
  color: #303C6D;

  @media (max-width: 550px) {
    align-self: center;
  }
`;

export const Image = styled(Img)`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  object-fit: contain;
  object-position: center center;
  margin: .6em;
  flex-shrink: 0;
  box-shadow: 0px 0px 36px rgba(255, 255, 255, 1);
  justify-self: center;
`;
