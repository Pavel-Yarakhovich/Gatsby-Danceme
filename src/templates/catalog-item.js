import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import get from "lodash/get";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Delivery from "../components/Delivery";
import Navigation from "../components/Navigation";
import styled from "styled-components";

class CatalogItemTemplate extends React.Component {
  render() {
    const product = get(this.props, "data.contentfulProduct");
    const siteTitle = get(this.props, "data.site.siteMetadata.title");
    const deliveryOptions = get(this, "props.data.allContentfulDelivery.edges");

    console.log(this.props.location);

    return (
      <Layout location={this.props.location}>
        <Navigation routes={[
          { name: "Вернуться на главную", path: "/" },
          { name: "Каталог", path: "/catalog" },
          { name: "Доставка", path: `${this.props.location.pathname}/#item-delivery` },
        ]}/>
        <Page>
          <Helmet title={`${product.title} | ${siteTitle}`} />
          <HeaderUnderline />
          <ImageWrapper>
            <Image alt={product.title} fluid={product.image.fluid} />
          </ImageWrapper>
          <HeaderUnderlineReverse />
          <Wrapper>
            <SectionHeadline>{product.title}</SectionHeadline>
            <p
              style={{
                display: "block",
              }}
            >
              Артикул: {product.article}
            </p>
            <Subcategory>Описание</Subcategory>
            <SubcategoryUnderline />
            <div
              dangerouslySetInnerHTML={{
                __html: product.description.childMarkdownRemark.html,
              }}
            />
            <Subcategory>Размеры</Subcategory>
            <SubcategoryUnderline />
            <Sizes>
              {product.sizes.map((size) => (
                <Size>{size}</Size>
              ))}
            </Sizes>

            <Subcategory>Материал</Subcategory>
            <SubcategoryUnderline />
            <p
              style={{
                display: "block",
              }}
            >
              {product.material}
            </p>
          </Wrapper>
          <Delivery id="item-delivery" options={deliveryOptions} />
        </Page>
      </Layout>
    );
  }
}

export default CatalogItemTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      article
      title
      sizes
      material
      description {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid(
          maxWidth: 1180
          background: "rgb:000000"
          resizingBehavior: SCALE
        ) {
          ...GatsbyContentfulFluid_tracedSVG
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
  }
`;

const Page = styled.div`
  background: #fff;
`;

const ImageWrapper = styled.div`
  background: linear-gradient(transparent, #efefef, transparent);
  color: #fff;
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Image = styled(Img)`
  height: 100%;
  max-height: 600px;
  width: 60%;
  object-fit: contain;
  object-position: center center;
`;

const HeaderUnderline = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, purple, lightgrey);
`;

const HeaderUnderlineReverse = styled(HeaderUnderline)`
  background: linear-gradient(90deg, lightgrey, purple);
`

const Wrapper = styled.div`
  width: calc(100% - 10vmin);
  margin: 0 auto;
  padding: 5vmin 0;
`;

const SectionHeadline = styled.h1`
  padding: 0 0 0.4em 0;
  margin: 0 0 5vmin 0;
  border-bottom: 1px solid #ddd;
`;

const Subcategory = styled.h3`
  font-size: 1.5em;
  padding: 0 0 0.4em 0;
  margin: 0;
`;

const SubcategoryUnderline = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, lightgrey, purple);
  margin: 0 0 2vmin 0;
`;

const Sizes = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 2vmin 0;
`;

const Size = styled.div`
  padding: 2px 6px;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  box-sizing: border-box;
  box-shadow: 0 0 3px rgb(177, 158, 181);
`;
