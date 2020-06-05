import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import styled from "styled-components";
import TrustImg from "../images/tel_trust.jpeg";

class TrustPhoneIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const trustInfo = get(this, "props.data.allContentfulTrust.edges");
    const links = get(this, "props.data.allContentfulLinks.edges");
    const schoolInfo = get(this, "props.data.allContentfulSchoolInfo.edges");
    const info = [trustInfo][0][0].node.text.json.content;

    return (
      <Layout
        location={this.props.location}
        links={links}
        footerInfo={schoolInfo[0].node}
      >
        <Page>
          <Helmet title={siteTitle} />
          <Title>
            <Image src={TrustImg} />
            <p>Тэлефон даверу</p>
          </Title>
          <Content>
            {info.map((item) => {
              let node;
              if (item.nodeType === "heading-2") {
                node = null;
              }
              if (item.nodeType === "paragraph") {
                node = <P key={Math.random()}>{item.content[0].value}</P>;
              }
              return node;
            })}
          </Content>
        </Page>
      </Layout>
    );
  }
}

export default TrustPhoneIndex;

export const pageQuery = graphql`
  query TrustPhoneIndexQuery {
    allContentfulTrust {
      edges {
        node {
          text {
            json
          }
        }
      }
    }
    allContentfulLinks(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          id
          image {
            fluid(resizingBehavior: PAD, maxHeight: 120) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          title
          url
        }
      }
    }
    allContentfulSchoolInfo {
      edges {
        node {
          address
          director
          email
          phone
        }
      }
    }
  }
`;

const Page = styled.div`
  background: #fff;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  background: linear-gradient(
    90deg,
    rgba(52, 68, 133, 0.03) 90%,
    transparent,
    rgba(52, 68, 133, 0.1)
  );
  background-size: contain;
  font-size: 1.5em;
  text-transform: uppercase;
  letter-spacing: .03rem;
  color: #344485;
  border-bottom: 4px solid #344485;
  border-top: 4px solid #344485;
  p {
    margin: 15px;
  }

  @media (max-width: 620px) {
    flex-flow: column;
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 15px;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
  margin: 15px;
  object-fit: contain;
  object-position: center center;

  @media (max-width: 620px) {
    width: auto;
    height: 200px;
  }
`;

const P = styled.p`
  text-align: center;
`;
