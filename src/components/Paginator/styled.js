import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
`

export const Prev = styled.button`
  border: none;
  background: none;
  padding: 0 5px;
  color: rgb(77, 0, 122);
  text-transform: uppercase;
  letter-spacing: .04em;
  transition: all 250ms ease;

  ${props => props.disabled && css`
    transform: scale(0);
  `}

  :hover {
    color: purple;
    cursor: pointer;
  }
`

export const Next = styled(Prev)``;

export const PageNumber = styled.span`
  margin: 0 5px;
  color: grey;

  ${props => props.active && css`
    color: purple;
  `}
`

export const Separator = styled(PageNumber)``;