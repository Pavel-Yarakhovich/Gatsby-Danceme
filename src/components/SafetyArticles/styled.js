import styled from "styled-components";
import Bg from "../../images/safety_bg.jpg";

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
  background: white;
  display: flex;
  flex-flow: column;
  box-shadow: 6px 6px 9px rgba(0, 0, 0, .1);
  border: 1px solid rgba(158, 2, 0, .5);
`;

export const Header = styled.p`
  margin: 0;
  padding: 0.7em;
  font-size: 1.7em;
  font-weight: 600;
  letter-spacing: .04rem;
  color: white;
  background-color: rgb(158, 2, 0);
  border-bottom: 5px solid #4a3c3c;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
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

export const Date = styled.span`
  padding: 10px 30px;
  font-size: 20px;
  text-align: right;
  font-family: Marck;
`;

export const AdditionalLink = styled.span`
  padding: 12px;
  margin: 6px;
  border: 1px solid orange;
`;

export const WrapImg = styled.div`
  height: auto;
  width: 450px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
`;
