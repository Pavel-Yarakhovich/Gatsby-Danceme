import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(110deg, black, rgb(77, 0, 122) 60%, purple);
  padding: 10px 25px;
  box-sizing: border-box;
  margin: 0;
  height: 80px;
  width: 100%;
  font-size: 1.1em;
  color: white;
  font-weight: 400;
  letter-spacing: .06em;
`;

export const HeaderUnderline = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(
    90deg,
    black 5%,
    rgb(77, 0, 122),
    transparent 75%
  );
  margin-top: auto;
`;

