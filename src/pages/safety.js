import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import { SafetyArticles } from "../components/SafetyArticles";
import SafetyBg from "../images/safety.png";
import styled from "styled-components";

class SafetyIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const links = get(this, "props.data.allContentfulLinks.edges");
    const schoolInfo = get(this, "props.data.allContentfulSchoolInfo.edges");
    const articles = get(this, "props.data.allContentfulSafety.nodes");
   
    return (
      <Layout location={this.props.location} links={links} footerInfo={schoolInfo[0].node}>
        <Page>
          <Helmet title={siteTitle} />
          <Title>
            <p>Безопасность</p>
          </Title>
          <SafetyArticles articles={articles}/>
        </Page>
      </Layout>
    );
  }
}

export default SafetyIndex;

export const pageQuery = graphql`
  query SafetyIndexQuery {
    allContentfulSafety(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        id
        image {
          fluid(
            maxHeight: 250
            resizingBehavior: PAD
            background: "rgb:000000"
          ) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        title
        text {
          content {
            content {
              value
            }
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
  height: 100px;
  max-height: 200px;
  background: 
    linear-gradient(90deg, rgba(77, 0, 122, 0.03) 90%, rgba(77, 0, 122, 0.08)), url(${SafetyBg}) no-repeat left center;
  background-size: contain;
  font-size: 1.5em;
  font-weight: 600;
  overflow: hidden;
  border-bottom: 4px solid rgb(150, 0, 0);

  p {
    margin: 0 1em;
    text-transform: uppercase;
    letter-spacing: 0.04rem;
  }

  @media (max-width: 480px) {
    justify-content: flex-end;
  }
`;
