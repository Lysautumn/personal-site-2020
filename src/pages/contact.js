import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Ally" />
    <h1>This is the contact page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ContactPage;
