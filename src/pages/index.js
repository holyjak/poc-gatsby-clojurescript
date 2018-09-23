import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const MainBody = require('app.main').body;

// TODO Tmp - move elsewhere
if (process.env.NODE_ENV !== "production") {
  window["$CLJS"] = require("cljs_env");
  require("shadow.cljs.devtools.client.browser");
}

const IndexPage = () => (
  <Layout>
    <MainBody></MainBody>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
