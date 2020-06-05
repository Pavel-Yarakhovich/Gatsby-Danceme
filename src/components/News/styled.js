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
`

export const NewsWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 25px;
`

export const NewsContainer = styled.div`
  width: 100%;
  min-height: 320px;
  border: 1px solid rgba(12, 12, 12, .1);
  border-radius: 4px;
  background: rgba(0,0,30,.05);
  display: flex;
  flex-flow: column;
  box-shadow: 6px 6px 9px rgba(12, 12, 12, .1);
`

export const Header = styled.p`
  margin: 0;
  padding: .7em;
  font-size: 1.5em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .03rem;
  color: blue;
  background-color: #ffd940;
  border-bottom: 2px solid blue;
  text-align: center;
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 2px solid #ffd940;
  background: url(${Bg}) no-repeat center center , rgba(255, 255, 255, .5);
  background-size: cover;
`

export const WrapImg = styled.div`
  height: auto;
  width: 450px;
  box-shadow: 0 0 12px rgba(0, 0, 0, .4);
`

export const Image = styled.img`
  height: 90%;
  width: auto;
  margin: 0 4px;
`

export const Text = styled.div`
  padding: 25px;
  margin: 0;
  text-align: justify;
  font-size: 16px;
  text-indent: 1.5rem;
`

export const Date = styled.span`
  padding: 10px 30px;
  font-size: 20px;
  text-align: right;
  font-family: Marck;
  letter-spacing: .15rem;
`