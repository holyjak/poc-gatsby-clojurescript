/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      // Make it easier to resolve cljs-generated files withotu ../..:
      modules: [
          path.resolve(__dirname, "target"),
          path.resolve(__dirname, "src-extra"), 
          "node_modules"],
    },
    module: {
      rules: [
        {
            test: /.*\/pages\/.*\.js$/,
            use: path.resolve('./cljs-dev-support-loader.js'),
      //     test: /\.less$/,
      //     use: [
      //       // We don't need to add the matching ExtractText plugin
      //       // because gatsby already includes it and makes sure its only
      //       // run at the appropriate stages, e.g. not in development
      //       loaders.miniCssExtract(),
      //       loaders.css({ importLoaders: 1 }),
      //       // the postcss loader comes with some nice defaults
      //       // including autoprefixer for our configured browsers
      //       loaders.postcss(),
      //       `less-loader`,
      //     ],
        },
      ],
    },
    // plugins: [
    //   }),
    // ],
  })
}
