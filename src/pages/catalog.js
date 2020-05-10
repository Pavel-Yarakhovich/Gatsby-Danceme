import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import CatalogContent from "../components/CatalogContent";
import MainBg from "../images/catalog_bg.jpg";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import ScrollToTop from "../components/ScrollToTop";
import Filter from "../components/Filter";

class CatalogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredProducts: get(this, "props.data.allContentfulProduct.edges"),
    };
    this.filter = this.filter.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleResetFilter = this.handleResetFilter.bind(this);
  }

  filter = (filterOption) => {
    if (filterOption) {
      this.setState({
        filteredProducts: get(
          this,
          "props.data.allContentfulProduct.edges"
        ).filter(({ node }) => node.categories.includes(filterOption)),
      });
    } else {
      this.setState({
        filteredProducts: get(this, "props.data.allContentfulProduct.edges"),
      });
    }
  };

  handleOptionClick = (e) => this.filter(e.target.innerHTML);
  
  handleResetFilter = () => this.setState({
    filteredProducts: get(this, "props.data.allContentfulProduct.edges"),
  });

  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const products = get(this, "props.data.allContentfulProduct.edges");

    return (
      <Layout location={this.props.location}>
        <Header>
          <Navigation routes={[{ name: "Вернуться на главную", path: "/" }]} />
          <Filter products={products} optionClicked={this.handleOptionClick} resetClicked={this.handleResetFilter}/>
        </Header>
        <Page>
          <Helmet title={siteTitle} />
          <Title bg={MainBg}>
            <p>Каталог</p>
          </Title>
          <HeaderUnderline />
          <CatalogContent products={this.state.filteredProducts} />
        </Page>
        <ScrollToTop />
      </Layout>
    );
  }
}

export default CatalogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
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
  }
`;

const Page = styled.div`
  background: #fff;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 61.8vh;
  max-height: 400px;
  background: url(${(props) => props.bg}) no-repeat,
    linear-gradient(90deg, rgba(77, 0, 122, 0.03) 90%, rgba(77, 0, 122, 0.08));
  background-size: contain;
  font-size: 3em;
  overflow: hidden;

  p {
    margin: 0 2em;
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
