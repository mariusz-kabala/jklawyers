const path = require("path");
const fs = require("fs-extra");
const fetch = require('node-fetch')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "components": path.resolve(__dirname, "src/components"),
        "locales": path.resolve(__dirname, "src/locales"),
        "styles": path.resolve(__dirname, "src/styles"),
      }
    }
  });
};

exports.onPreBootstrap = async () => {
  const data = await fetch(`http://localhost:1337/translations?_limit=1000`).then(res => res.json())

  console.log(data);

  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  )
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allStrapiArticles {
        edges {
          node {
            title
            text
            slug
            language {
              code
            }
          }
        }
      }
    }
  `)

  result.data.allStrapiArticles.edges.forEach(({node}) => {
    createPage({
      path: `${node.language.code}/${node.slug}`,
      component: path.resolve(`./src/templates/article/index.jsx`),
      context: {
        slug: node.slug,
        language: node.language.code,
        title: node.title,
        text: node.text
      },
    })
  })
}
