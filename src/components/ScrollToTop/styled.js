import styled, { css } from "styled-components";

export const Button = styled.button`
  transform: scale(0);
  transform-origin: right bottom;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  border: none;
  box-shadow: 4px 4px 15px white;
  border-radius: 50% 50% 3px;
  outline: none;
  width: 75px;
  height: 75px;
  background: linear-gradient(rgba(77, 0, 122, .8), rgba(77, 0, 122, .3));
  color: white;
  font-weight: 400;
  cursor: pointer;
  padding: 15px;
  border-radius:
  font-size: 18px;
  font-family: Marck;
  transition: all 320ms ease;

  :hover {
    background-color: #555;
  }

  ${props => props.isScrolled && css`
  transform: scale(1);
  `}
`