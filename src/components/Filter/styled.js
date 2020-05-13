import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 3000;
  top: 0;
  right: 0;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  max-height: 100vh;
  overflow: auto;
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
  flex-shrink: 0;

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
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 10px;
  padding-bottom: 10px;
`

export const Option = styled.button`
  border: none;
  border-radius: 25px 0 0 25px;
  padding: 15px;
  background: 0;
  color: white;
  margin: 4px 0;
  width: auto;
  font-size: .9em;
  letter-spacing: .08em;
  text-align: right;
  font-family: BeauSans;
  background: linear-gradient(45deg, transparent , rgb(${props => props.delay * 12 + 77}, 0, ${props => props.delay * 9 + 122}) 45%);
  transform: scaleX(0);
  transform-origin: right center;
  transition: all 250ms ease-in-out ${props => props.delay * 90}ms;
  box-shadow: -1px 3px 6px rgba(0, 0, 0 , .4);

  ${props => props.opened && css`
    transform: scaleX(1);

    :hover {
      cursor: pointer;
    }

    :focus {
      outline: none;
    }
`}
`

export const Reset = styled(Option)`
  background: white;
  font-weight: 600;
  color: rgb(163, 32, 23);
`