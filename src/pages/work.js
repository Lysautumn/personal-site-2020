import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const WorkPage = () => (
  <Layout>
    <SEO title="Ally's Work" />
    <h1>This is my work</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default WorkPage;
