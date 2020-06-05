import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import styled from "styled-components";

class AboutSchoolIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const links = get(this, "props.data.allContentfulLinks.edges");
    const schoolInfo = get(this, "props.data.allContentfulSchoolInfo.edges");
    const aboutSchool = get(this, "props.data.allContentfulAboutShcool.edges");
    const info = [aboutSchool][0][0].node;

    return (
      <Layout
        location={this.props.location}
        links={links}
        footerInfo={schoolInfo[0].node}
      >
        <Header></Header>
        <Page>
          <Helmet title={siteTitle} />
          <Title>
            <p>Матэрыяльна-тэхнічная база</p>
          </Title>
          <HeaderUnderline />
          <ul>
            {info.materials.content[0].content.map((item) => (
              <li key={Math.random()}>{item.content[0].content[0].value}</li>
            ))}
          </ul>

          <Title>
            <p>Гісторыя школы</p>
          </Title>
          <HeaderUnderline />
          <div>
            {info.history.content.map((item) => (
              <P key={Math.random()}>{item.content[0].value}</P>
            ))}
          </div>
          <Title>
            <p>Школа сёння</p>
          </Title>
          <HeaderUnderline />
          <div>
            {info.today.content.map((item) => (
              <P key={Math.random()}>{item.content[0].value}</P>
            ))}
          </div>
        </Page>
      </Layout>
    );
  }
}

export default AboutSchoolIndex;

export const pageQuery = graphql`
  query AboutSchoolIndexQuery {
    allContentfulAboutShcool {
      edges {
        node {
          materials {
            content {
              content {
                content {
                  content {
                    value
                  }
                }
              }
            }
          }
          history {
            content {
              content {
                value
              }
            }
          }
          today {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
    allContentfulLinks(filter: { node_locale: { eq: "en-US" } }) {
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
  justify-content: flex-end;
  align-items: center;
  height: 5rem;
  max-height: 400px;
  background: linear-gradient(
    90deg,
    rgba(48, 60, 109, 0.03) 90%,
    rgba(48, 60, 109, 0.08)
  );
  background-size: contain;
  font-size: 1.5em;
  overflow: hidden;

  p {
    margin: 0 2em;
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
    rgb(48, 60, 109),
    transparent 75%
  );
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const P = styled.p`
  text-align: justify;
  padding: 0 10px;
`;
