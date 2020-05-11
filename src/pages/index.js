import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import CatalogPreview from "../components/CatalogPreview";
import Delivery from "../components/Delivery";
import Feedbacks from "../components/Feedbacks";
import Illustration from "../components/Illustration";
import Contacts from "../components/Contacts";
import Navigation from "../components/Navigation";
import MainInfo from "../components/MainInfo";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const products = get(this, "props.data.allContentfulProduct.edges");
    const deliveryOptions = get(this, "props.data.allContentfulDelivery.edges");
    const feedbacks = get(this, "props.data.allContentfulFeedback.edges");
    const [mainInfo] = get(this, "props.data.allContentfulMainInfo.edges");
    const contacts = get(this, "props.data.allContentfulContacts.edges");

    console.log("mainInfo", mainInfo.node);

    return (
      <Layout location={this.props.location} >
        <div style={{ background: "rgba(255, 255, 255, .7)" }}>
          <Helmet title={siteTitle} />
          <Navigation routes={[
            { name: "Каталог", path: "/catalog" },
            { name: "Доставка", path: "#delivery" },
            { name: "Отзывы", path: "#feedbacks" },
            { name: "Контакты", path: "#contacts" },
          ]}/>
          <Illustration data={mainInfo.node} />
          <MainInfo data={mainInfo.node} />
          <CatalogPreview products={products.slice(0, 3)} />
          <Delivery id="delivery" options={deliveryOptions} />
          <Feedbacks feedbacks={feedbacks.slice(0,3)} />
          <Contacts contacts={contacts[0].node} insta={mainInfo.node}/>

        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulMainInfo {
      edges {
        node {
          title
          motto
          description {
            childMarkdownRemark {
              html
            }
          }
          instaName
          instaPage
          location {
            lat
            lon
          }
          logo {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: PAD) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulContacts {
      edges {
        node {
          address
          email
          phone
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulProduct(sort: { fields: [article], order: DESC }) {
      edges {
        node {
          article
          slug
          image: image {
            fluid(
              maxWidth: 480
              maxHeight: 480
              resizingBehavior: FILL
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          title
          description {
            description
            childMarkdownRemark {
              html
            }
          }
          material
          categories
        }
      }
    }
    allContentfulDelivery(sort: { fields: [category], order: DESC }) {
      edges {
        node {
          category
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulFeedback {
      edges {
        node {
          image {
            fluid(maxWidth: 350, maxHeight: 350, resizingBehavior: PAD) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          text {
            childMarkdownRemark {
              html
            }
          }
          name
          date
        }
      }
    }
  }
`;
