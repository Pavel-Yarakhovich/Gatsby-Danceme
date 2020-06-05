import React from "react";
import "./base.css";
import Container from "./container";
import Footer from "../components/Footer";
import Illustration from "../components/Illustration";
import Navigation from "../components/Navigation";
import LayoutContent from "../components/LayoutContent";

class Template extends React.Component {
  render() {
    const { children, links, footerInfo } = this.props;

    return (
      <Container>
        <Illustration />
        <Navigation />
        <LayoutContent links={links}>{children}</LayoutContent>
        <Footer footerInfo={footerInfo}/>
      </Container>
    );
  }
}

export default Template;
