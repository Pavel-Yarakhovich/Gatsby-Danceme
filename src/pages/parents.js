import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import { ParentsArticles } from "../components/ParentsArticles";
import { Tables } from "../components/Tables";
import styled from "styled-components";

class ParentsIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const links = get(this, "props.data.allContentfulLinks.edges");
    const schoolInfo = get(this, "props.data.allContentfulSchoolInfo.edges");
    const articles = get(this, "props.data.allContentfulParents.nodes");
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
            <p>Родителям</p>
          </Title>
          <HeaderUnderline />
          <ParentsArticles articles={articles}/>
          <Tables tables={tables} />
        </Page>
      </Layout>
    );
  }
}

export default ParentsIndex;

export const pageQuery = graphql`
  query ParentsIndexQuery {
    allContentfulParents(filter: {node_locale: {eq: "en-US"}}) {
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
    allContentfulTable(filter: {forpage: {eq: "parents"}}) {
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
  justify-content: flex-end;
  align-items: center;
  height: 100px;
  max-height: 200px;
  background-size: contain;
  font-size: 1.5em;
  font-weight: 600;
  overflow: hidden;

  p {
    margin: 0 2em;
    text-transform: uppercase;
    color: #303c6d;
  }

  @media (max-width: 430px) {
    background-size: cover;
    justify-content: flex-start;
    align-items: flex-end;

    p {
      margin: 0.5em;
    }
  }
`;

const HeaderUnderline = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(
    90deg,
    black 5%,
    rgb(77, 0, 122),
    transparent 75%
  );
`;
