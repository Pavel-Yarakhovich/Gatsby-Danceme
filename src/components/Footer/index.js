import React from "react";
import { Wrapper, Container, Text, AddressContainer } from "./styled";

class FooterComponent extends React.Component {
  
  render() {
    const { footerInfo } = this.props;
    const { address, director, email, phone } = footerInfo;

    return (
      <Wrapper>
        <Container>
          <AddressContainer>{ address.map(item => <span key={Math.random()}>{item} </span>) }</AddressContainer>
          <Text>Телефон: {phone}</Text>
          <Text>Электронный адрес: {email}</Text>
          <Text>Директор: {director}</Text>
        </Container>
      </Wrapper>
    );
  }
}

export default FooterComponent;
