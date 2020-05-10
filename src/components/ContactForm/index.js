import React, { memo, useState } from "react";
import axios from "axios";
import * as Styled from "./styled";

const ContactForm = memo(() => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/8d424839-5444-4e03-9482-d5913cb1fc71",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Ваше сообщение отправлено!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <>
    { serverState.submitting && <Styled.Loading /> }
    { serverState.status && <p>{serverState.status.msg}</p> }
    <Styled.Form  onSubmit={handleOnSubmit}>
      <Styled.TextInput name="name" type="text" placeholder="Ваше имя"/>
      <Styled.TextInput name="phone-or-email" type="text" placeholder="Ваш номер телефона или email"/>
      <Styled.TextArea name="comment" placeholder="Ваш вопрос или комментарий..."/>
      <Styled.SendButton type="submit">Отправить</Styled.SendButton>
    </Styled.Form>
    </>
  );
});

export default ContactForm;
