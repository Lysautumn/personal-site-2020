import React from 'react';
import { Link } from 'gatsby';

import Image from '../components/image';
import SEO from '../components/seo';

import './index.scss';

const imageStyles = {
  maxWidth: `300px`,
  marginBottom: `1.45rem`
};

const IndexPage = () => (
  <>
    <SEO title="Ally Boyd" />
    <section className="hero is-primary is-bold is-fullheight">
      <div className="container">
        <h1 className="title">Hey, I'm <span className="main-name">Ally</span></h1>

        <div style={ imageStyles }>
          <Image />
        </div>
        <h2 className="subtitle">Creative software engineer in Minneapolis, MN</h2>
      </div>

      <Link to="/page-2/">Go to page 2</Link>
    </section>
  </>

);

export default IndexPage;
