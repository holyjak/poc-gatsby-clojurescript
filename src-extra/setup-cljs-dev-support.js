/** This file is auto-required from every page .js via a webpack loader */
if (process.env.NODE_ENV !== "production") {
  window["$CLJS"] = require("cljs_env");
  require("shadow.cljs.devtools.client.browser"); // .target/ is on Node Path so we can do this
}
