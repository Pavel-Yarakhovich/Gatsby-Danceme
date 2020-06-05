import styled from "styled-components";
import Pupil from "../../images/pupil.webp";

export const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(170deg, #303c6d 75%, #101426);

  @media (max-width: 700px) {
    background: url(${Pupil}) no-repeat calc(100% + 50px) center, linear-gradient(170deg, #303c6d 75%, #101426);
    background-size: contain;
  }
`;

export const Container = styled.div`
  width: calc(100% - 10vmin);
  max-width: 1180px;
  margin: 0 auto;
  padding: 30px 10px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  color: #fff;
  font-size: 16px;
  background: url(${Pupil}) no-repeat right center;
  background-size: contain;

  @media (max-width: 700px) {
    background: none;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  letter-spacing: 0.06em;
  margin: 0.8em 0;
  width: 50%;
  border-bottom: 1px solid white;
  transition: all 250ms ease;

  :hover {
    color: orange;
    border-color: orange;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    width: auto;
    align-self: flex-start;
    background: rgba(48, 60, 109, .5);
    box-shadow: 0 0 20px 20px rgba(48, 60, 109, .5);
    background-position: -50px center;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
  border-bottom: 1px solid white;
  margin-bottom: 0.8em;
  transition: all 250ms ease;

  :hover {
    color: orange;
    border-color: orange;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    width: auto;
    align-self: flex-start;
    background: rgba(48, 60, 109, .5);
    box-shadow: 0 0 20px 20px rgba(48, 60, 109, .5);
  }
`;
