/* Could be replaced by Gatsby's `createPages.js`
 * looking for all `./target/*.page.*.js` files and
 * creating pages with corresponding paths from these.
 */
import React from 'react'

import Layout from '../../../components/layout'

const BrandBody = require('app.templates.brand').Body;

// TODO Tmp - move elsewhere
if (process.env.NODE_ENV !== "production") {
  window["$CLJS"] = require("cljs_env");
  require("shadow.cljs.devtools.client.browser");
}

const BrandPage = () => (
  <Layout>
    <BrandBody brand="Tesla" />
  </Layout>
)

export default BrandPage
