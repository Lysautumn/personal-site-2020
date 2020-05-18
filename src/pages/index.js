import React from 'react';
import { Link } from 'gatsby';

import Image from '../components/image';
import SEO from '../components/seo';

import './index.scss';

const IndexPage = () => (
  <>
    <SEO title="Ally Boyd" />
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-flex is-multiline is-centered">
            <div className="column is-one-third-desktop is-offset-1-desktop is-full-mobile center">
              <figure className="main-image-container">
                <Image />
              </figure>
            </div>
            <div className="column has-text-centered">
              <h1 className="title is-size-4-mobile">Hey, I'm <span className="main-name is-size-1-mobile">Ally</span></h1>
              <h2 className="subtitle main-subtitle is-size-6-mobile">Creative software engineer in Minneapolis, MN</h2>
            </div>
          </div>
          <div className="column button-container has-text-centered">
            <Link to="/about/" className="button is-medium learn-more-button">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default IndexPage;
