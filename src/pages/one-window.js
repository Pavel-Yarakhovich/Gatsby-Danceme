import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import { OneWindowArticles } from "../components/OneWindowArticles";
import { Tables } from "../components/Tables";
import styled from "styled-components";

class OneWindowIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const links = get(this, "props.data.allContentfulLinks.edges");
    const schoolInfo = get(this, "props.data.allContentfulSchoolInfo.edges");
    const articles = get(this, "props.data.allContentfulOneWindow.nodes");
    const tables = get(this, "props.data.allContentfulTable.edges");

    return (
      <Layout
        location={this.props.location}
        links={links}
        footerInfo={schoolInfo[0].node}
      >
        <Page>
          <Helmet title={siteTitle} />
          <Title>
            <p>Одно окно</p>
          </Title>
          <OneWindowArticles articles={articles} />
          <Tables tables={tables} />
        </Page>
      </Layout>
    );
  }
}

export default OneWindowIndex;

export const pageQuery = graphql`
  query OneWindowIndexQuery {
    allContentfulOneWindow(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        id
        title
        url
        text {
          content {
            content {
              value
            }
          }
        }
        image {
          fluid(
            maxHeight: 250
            resizingBehavior: PAD
            background: "rgb:000000"
          ) {
            ...GatsbyContentfulFluid_tracedSVG
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
    allContentfulTable(filter: {forpage: {eq: "onewindow"}}) {
      edges {
        node {
          columns
          content
          forpage
          title
          id
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
  background: rgb(3, 144, 252);
  font-size: 1.5em;
  font-weight: 600;
  overflow: hidden;

  p {
    margin: 0 2em;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.03rem;
  }

  @media (max-width: 430px) {
    background-size: cover;
    justify-content: flex-start;
    align-items: flex-end;

    p {
      margin: 0.5em;
      color: white;
    }
  }
`;
