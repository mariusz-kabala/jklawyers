require('dotenv').config()

const path = require("path");
const fs = require("fs-extra");
const fetch = require('node-fetch')

const { CMS_URL } = process.env

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
  const data = await fetch(`${CMS_URL}/translations?_limit=1000`).then(res => res.json())
  const translations = {}

  for (const t of data) {
    if (!translations[t.language.code]) {
      translations[t.language.code] = {}
    }

    translations[t.language.code][t.key] = t.value
  }

  const localesDir = path.join(__dirname, '/src/locales/')

  if (!fs.existsSync(localesDir)) {
    fs.mkdirSync(localesDir, 0744);
  }

  await Promise.all(Object.keys(translations).map(lang => {
    return new Promise((resolve, reject) => {
      fs.writeFile(`${localesDir}/${lang}.translations.json`, JSON.stringify(translations[lang]), err => {
        if (err) {
          return reject(err)
        }

        resolve()
      })
    })
  }))

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
      allStrapiLanguages {
        edges {
          node {
            code
          }
        }
      }
    }
  `)

  result.data.allStrapiLanguages.edges.forEach(({node}) => {
    createPage({
      path: `${node.code}`,
      component: path.resolve(`./src/pages/index.js`),
      context: {
        language: node.code,
      },
    })
  })

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
