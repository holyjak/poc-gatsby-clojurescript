/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/* Activate support for Cljs REPL at each physical page */
export const wrapRootElement = ({ element }) => {
    if (process.env.NODE_ENV !== "production") {
      window["$CLJS"] = require("cljs_env");
      require("shadow.cljs.devtools.client.browser"); // .target/ is on Node Path so we can do this
    }
  return element;
}
