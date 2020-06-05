import styled from "styled-components";
import Bg from "../../images/teacher.jpg";

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
  border-radius: 4px 30px 4px 30px;
  background: rgba(0, 0, 30, 0.05);
  display: flex;
  flex-flow: column;
  box-shadow: 6px 6px 9px rgba(0, 0, 0, .3);
  overflow: hidden;
`;

export const Header = styled.p`
  margin: 0;
  padding: 0.7em;
  font-size: 1.5em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .03rem;
  color: white;
  background-color: rgb(5, 31, 2);
  border-bottom: 1px solid white;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: url(${Bg}) no-repeat center center;
  background-size: cover;
  padding: 8px 0;
`;

export const Text = styled.div`
  padding: 25px;
  margin: 0;
  text-align: justify;
  font-size: 16px;
  max-height: 400px;
  overflow: auto;
`;

export const AdditionalLink = styled.span`
  padding: 12px;
  margin: 6px;
  border: 1px solid rgb(7, 97, 1);
  border-radius: 2px 2px 2px 30px;
`;

export const WrapImg = styled.div`
  height: auto;
  width: 450px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
`;
