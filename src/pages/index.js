import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const MainBody = require('../../target/app.main').body;

const IndexPage = () => (
  <Layout>
    <MainBody></MainBody>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
