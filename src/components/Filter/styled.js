import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 3000;
  top: 0;
  right: 0;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
`

export const ToggleButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, .5);
  color: #373F49;
  height: 4em;
  padding: 0 15px;
  box-sizing: border-box;
  font-size: 20px;
  font-family: BeauSans;
  box-shadow: inset 0 5px 0 rgb(77, 0, 122);

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
  
`

export const FilterOptions = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  // background: rgba(255, 255, 255, .8);
  // padding: 12px;
  // box-sizing: border-box;
  transform: scaleY(0);
  transform-origin: center top;
  transition: all 250ms ease-in-out;
  max-height: calc(100vh - 4em);
  overflow: auto;

  ${props => props.opened && css`
    transform: scaleY(1);
  `}
`

export const Option = styled.button`
  border: none;
  padding: 10px;
  background: 0;
  color: white;
  margin: 4px 0;
  width: 100%;
  font-size: 1em;
  letter-spacing: .03em;
  text-align: right;
  font-family: Marck;
  background: linear-gradient(45deg, transparent , rgb(77, 0, 122) 45%);
`