/* Could be replaced by Gatsby's `createPages.js`
 * looking for all `./target/*.page.*.js` files and
 * creating pages with corresponding paths from these.
 */
import React from 'react'

import Layout from '../components/layout'

import { Body as MainBody } from 'app.main';

const IndexPage = () => (
  <Layout>
    <MainBody />
  </Layout>
)

export default IndexPage
