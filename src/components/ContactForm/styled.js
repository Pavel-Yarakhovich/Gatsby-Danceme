import styled, { css, keyframes } from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column;
`;

export const TextInput = styled.input`
  width: 100%;
  margin: 8px 0;
  box-sizing: border-box;
  padding: 1.25rem 0.6rem;
  border: 1px solid rgb(77, 0, 122);
  border-radius: 4px;
  background: transparent;
  color: inherit;
  font-size: 1em;
  transition: all 300ms ease;

  :focus {
    border-left-color: rgb(71, 8, 84);
    box-shadow: inset 5px 0 0 rgb(71, 8, 84);
    letter-spacing: 0.05em;
    outline: none;
  }

  ::placeholder {
    color: grey;
  }

  ${(props) =>
    props.error &&
    css`
      border-color: red;
      ::placeholder {
        color: red;
      }
    `}
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin: 0.5rem 0 1rem;
  box-sizing: border-box;
  padding: 1.25rem 0.6rem;
  border: 1px solid rgb(77, 0, 122);
  border-radius: 4px;
  background: transparent;
  color: inherit;
  font-size: 1rem;
  transition: all 300ms ease;
  font-family: BeauSans;
  font-weight: 400;

  :focus {
    border-left-color: rgb(71, 8, 84);
    box-shadow: inset 5px 0 0 rgb(71, 8, 84);
    letter-spacing: 0.05rem;
    outline: none;
  }

  ::placeholder {
    color: grey;
  }

  ${(props) =>
    props.error &&
    css`
      border-color: red;
      ::placeholder {
        color: red;
      }
    `}
`;

export const SendButton = styled.button`
  width: auto;
  margin: 8px 0;
  box-sizing: border-box;
  padding: 1em 1.5em;
  border: none;
  border-radius: 4px;
  background: linear-gradient(90deg, purple, rgb(77, 0, 122));
  color: white;
  font-size: 1.3em;
  transition: all 300ms ease;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`;

const loading = keyframes`
  0, 100% {
    width: 100%;
    height: 1px;
    margin: 12.5px 0;
  }
  45%, 55% {
    width: 20px;
    height: 20px;
    margin: 3px 0;
    border-radius: 50%;
    opacity: .5;
  }
`;

export const Loading = styled.div`
  align-self: center;
  width: 100%;
  height: 2px;
  margin: 12px 0;
  animation: ${loading} 1.5s infinite ease-out;
  background: rgb(77, 0, 122);
`;
