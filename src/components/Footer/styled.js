import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(110deg, black, rgb(77, 0, 122) 60%, purple);
`;

export const Container = styled.div`
  width: calc(100% - 10vmin);
  max-width: 1180px;
  margin: 0 auto;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 25px;
  box-sizing: border-box;
  margin: 0;
  height: 80px;
  width: 100%;
  font-size: 1.1em;
  color: white;
  font-weight: 400;
  letter-spacing: 0.06em;
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
