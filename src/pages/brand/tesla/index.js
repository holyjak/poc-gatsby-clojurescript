/* Could be replaced by Gatsby's `createPages.js`
 * looking for all `./target/*.page.*.js` files and
 * creating pages with corresponding paths from these.
 */
import React from 'react'

import Layout from '../../../components/layout'

const BrandBody = require('app.templates.brand').Body;

const BrandPage = () => (
  <Layout>
    <BrandBody brand="Tesla" />
  </Layout>
)

export default BrandPage
