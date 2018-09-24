/* Could be replaced by Gatsby's `createPages.js`
 * looking for all `./target/*.page.*.js` files and
 * creating pages with corresponding paths from these.
 */
import React from 'react'

import Layout from '../components/layout'

const MainBody = require('app.main').Body;

const IndexPage = () => (
  <Layout>
    <MainBody></MainBody>
  </Layout>
)

export default IndexPage
