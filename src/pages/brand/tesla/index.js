/* Could be replaced by Gatsby's `createPages.js`
 * looking for all `./target/*.page.*.js` files and
 * creating pages with corresponding paths from these.
 */
import React from 'react'

import Layout from '../../../components/layout'

import { Body as BrandBody } from 'app.templates.brand';

const BrandPage = () => (
  <Layout>
    <BrandBody brand="Tesla" />
  </Layout>
)

export default BrandPage
