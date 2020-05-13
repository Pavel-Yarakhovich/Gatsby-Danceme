import styled from "styled-components";
import Img from "gatsby-image";
import Bg from "../../images/men_catalog_bg.jpg";

export const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(135deg, transparent, rgba(77, 0, 122, .7) 30%, rgb(77, 0, 122)), linear-gradient( transparent, rgb(77, 0, 122)), url(${Bg}) no-repeat;
  background-size: auto;

  @media (max-width: 810px) {
    background-size: contain;
  }
`

export const Illustration = styled.div`
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

  @media (max-width: 550px) {
    padding: 1em;
  }
`;

export const Title = styled.h2`
  margin: .4em 0;
  font-size: 4em;
  font-weight: 600;
  line-height: 1;
  color: white;

  @media (max-width: 550px) {
    align-self: center;
    font-size: 3em;
  }
`;

export const Motto = styled.p`
  margin: .4em 0;
  font-family: Marck;
  font-size: 2.4em;
  font-weight: 300;
  letter-spacing: 0.02em;

  @media (max-width: 550px) {
    align-self: center;
    font-size: 1.6em;
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
