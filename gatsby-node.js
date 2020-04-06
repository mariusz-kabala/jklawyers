const path = require("path");
const fs = require("fs-extra");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "components": path.resolve(__dirname, "src/components"),
        "styles": path.resolve(__dirname, "src/styles"),
      }
    }
  });
};

exports.onPostBuild = () => {
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  )
}