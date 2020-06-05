import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import { News } from "../components/News";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const news = get(this, "props.data.allContentfulNews.edges");
    const links = get(this, "props.data.allContentfulLinks.edges");
    const schoolInfo = get(this, "props.data.allContentfulSchoolInfo.edges");

    return (
      <Layout location={this.props.location} links={links} footerInfo={schoolInfo[0].node}>
        <div style={{ background: "rgba(255, 255, 255, .7)" }}>
          <Helmet title={siteTitle} />
          <News news={news}/>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulNews(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          id
          newsdate
          title
          text {
            content {
              content {
                value
              }
            }
          }
          photos {
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
    allContentfulLinks(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          id
          title
          url
          image {
            fluid(resizingBehavior: PAD, maxHeight: 120) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
