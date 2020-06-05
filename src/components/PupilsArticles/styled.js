import styled from "styled-components";
import Bg from "../../images/header_picture.jpg";

export const Container = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;

  @media (max-width: 550px) {
    padding: 10px;
  }
`;

export const NewsWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 25px;
`;

export const NewsContainer = styled.div`
  width: 100%;
  min-height: 320px;
  border-radius: 4px;
  background: rgba(0, 0, 90, 0.03);
  display: flex;
  flex-flow: column;
  box-shadow: 6px 6px 9px rgba(0, 0, 0, .1);
`;

export const Header = styled.p`
  margin: 0;
  padding: 0.7em;
  font-size: 1.5em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: .04rem;
  color: #303c6d;
  background-color: rgba(255, 218, 133, .5);
  border-bottom: 2px solid #303c6d;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 2px solid #ffd940;
  background: url(${Bg}) no-repeat center center;
  background-size: cover;
`;

export const WrapImg = styled.div`
  height: auto;
  width: 450px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
`;

export const Text = styled.div`
  padding: 25px;
  margin: 0;
  text-align: justify;
  font-size: 16px;
  max-height: 400px;
  overflow: auto;
  text-indent: 30px;
`;

export const AdditionalLink = styled.span`
  padding: 12px;
  margin: 6px;
  border: 1px solid orange;
  transition: all 250ms ease;

  :hover {
    border-style: dashed;
    a {
      color: rgb(46, 43, 214);
      text-decoration: underline;
    }
  }
`;
