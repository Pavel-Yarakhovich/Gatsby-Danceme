import React from "react";
import { Footer, HeaderUnderline } from "./styled";

class FooterComponent extends React.Component {
  render() {
    return (
      <>
        <HeaderUnderline />
        <Footer>DanceMe Minsk, 2020</Footer>
      </>
    );
  }
}

export default FooterComponent;
