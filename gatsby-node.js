const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const CatalogItem = path.resolve("./src/templates/catalog-item.js");
    resolve(
      graphql(
        `
          {
            allContentfulProduct {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        const products = result.data.allContentfulProduct.edges;
        products.forEach((product) => {
          createPage({
            path: `/catalog/${product.node.slug}/`,
            component: CatalogItem,
            context: {
              slug: product.node.slug,
            },
          });
        });
      })
    );
  });
};
