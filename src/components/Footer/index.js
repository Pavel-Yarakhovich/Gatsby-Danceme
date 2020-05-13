import React from "react";
import { Wrapper, Container, Footer, HeaderUnderline } from "./styled";

class FooterComponent extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <HeaderUnderline />
          <Footer>DanceMe Minsk, 2020</Footer>
        </Container>
      </Wrapper>
    );
  }
}

export default FooterComponent;
