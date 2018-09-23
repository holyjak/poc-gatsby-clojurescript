/* Could be replaced by Gatsby's `createPages.js`
 * looking for all `./target/*.page.*.js` files and
 * creating pages with corresponding paths from these.
 */
import React from 'react'

import Layout from '../components/layout'

const MainBody = require('app.main').Body;

// TODO Tmp - move elsewhere
if (process.env.NODE_ENV !== "production") {
  window["$CLJS"] = require("cljs_env");
  require("shadow.cljs.devtools.client.browser");
}

const IndexPage = () => (
  <Layout>
    <MainBody></MainBody>
  </Layout>
)

export default IndexPage
