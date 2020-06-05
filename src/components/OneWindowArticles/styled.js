import styled from "styled-components";
import Bg from "../../images/window.jpeg";

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
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-flow: column;
  box-shadow: 6px 6px 9px rgba(0, 66, 117, 0.3);
`;

export const Header = styled.p`
  margin: 0;
  padding: 0.7em;
  font-size: 1.5em;
  font-weight: 600;
  color: #303c6d;
  background-color: rgb(255, 254, 214);
  border-bottom: 2px solid rgb(3, 144, 252);
  text-align: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  background: url(${Bg}) no-repeat center center;
  background-size: cover;
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
  border: 1px solid rgb(3, 144, 252);
  border-radius: 4px;
  :hover {
    border-style: dashed;
    a {
      color: rgb(46, 43, 214);
      text-decoration: underline;
    }
  }
`;

export const WrapImg = styled.div`
  height: auto;
  width: 450px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
`;
