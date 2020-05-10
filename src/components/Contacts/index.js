import React from "react";
import ContactForm from "../ContactForm";
import * as Styled from "./styled";

export default ({ contacts = [], insta }) => (
  <Styled.Wrapper id="contacts">
    <Styled.SectionHeadline>Контакты</Styled.SectionHeadline>
    <Styled.HeaderUnderline />
    <Styled.ProductList>
      <Styled.ContactInfo>
        <Styled.Action>Найдите нас</Styled.Action>
        {contacts.address.map(item => <Styled.ContactInfoItem>{item}</Styled.ContactInfoItem>)}

        <Styled.Action>Свяжитесь с нами</Styled.Action>
        <Styled.ContactPhone href="tel:+375445421964">{contacts.phone}</Styled.ContactPhone>
        <Styled.ContactInfoItem>{contacts.email}</Styled.ContactInfoItem>

        <Styled.Action>Следите за новинками на нашей странице в Instagram:</Styled.Action>
        <Styled.ContactPhone href={insta.instaPage}>{insta.instaName}</Styled.ContactPhone>
      </Styled.ContactInfo>
      <Styled.ContactForm>
        <Styled.Action>Задайте нам вопрос</Styled.Action>
        <ContactForm />
      </Styled.ContactForm>
    </Styled.ProductList>
  </Styled.Wrapper>
);
