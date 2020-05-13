import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 10vmin);
  max-width: 1180px;
  margin: 0 auto;
  padding: 5vmin 0;

  @media (max-width: 550px) {
    margin: 0;
    width: 100%;
  }
`;

export const SectionHeadline = styled.h2`
  padding: 0 0 0.4em 0;
  margin: 0;

  @media (max-width: 550px) {
    padding: 0 0.4em;
  }
`;
export const HeaderUnderline = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(45deg, rgb(77, 0, 122), transparent);
  margin: 0 0 5vmin 0;
`;

export const ProductList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  @media (max-width: 750px) {
    flex-flow: column;
  }
`;

export const ItemWrapper = styled.li`
  padding: 1em;
  box-sizing: border-box;
  width: 30%;
  display: flex;
  flex-flow: column;
`;

export const ContactInfo = styled.div`
  width: 50%;
  padding:  0 25px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;

  @media (max-width: 750px) {
    width: 100%;
    padding:  0 10px;
  }
`;

export const ContactInfoItem = styled.p`
  font-size: 1.3em;
  margin: 0.2em 0;
  padding-left: 30px;

  @media (max-width: 750px) {
    text-align: center;
    padding: 0;
  }
`;

export const ContactForm = styled.div`
  width: 50%;
  padding:  0 25px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;

  @media (max-width: 750px) {
    width: 100%;
    padding:  0 10px;
  }
`;

export const ContactPhone = styled.a`
  font-size: 1.5em;
  color: purple;
  margin: 0.2em 0;
  letter-spacing: 0.05em;
  padding-left: 30px;

  @media (max-width: 750px) {
    text-align: center;
    padding: 0;
  }
`;

export const Action = styled.p`
  font-size: 1.5em;
  margin: 0.5em 0 0;
  color: rgb(71, 8, 84);

  @media (max-width: 750px) {
    text-align: center;
    margin-top: 1.5em;
  }
`;
