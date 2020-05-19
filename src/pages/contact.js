import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faDribbble, faGithub, faGoodreads, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './contact.scss';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Ally" />
    <div className="contact-container">
      <h1 className="title has-text-centered">Contact Me</h1>
      <section className="section">
        <p>
          I'm always interested in meeting new people and hearing about new opportunities
          to collaborate. There are many ways to contact me and see what I am up to:
        </p>
      </section>
      <section className="section card-container">
        <div className="columns is-multiline is-centered">
          <div className="card column is-one-quarter">
            <div className="card-content">
              <p className="bold-text">Want to learn more?</p>
              <p className="bold-text">Let's start a conversation!</p>
              <div className="link-container">
                <a className="links" href="mailto:allyboyd85@gmail.com">
                  <FontAwesomeIcon className="icons" icon={ faPaperPlane } />
                  Email Me
                </a>
              </div>
              <p className="email">allyboyd85@gmail.com</p>
            </div>
          </div>
          <div className="card column is-one-quarter">
            <div className="card-content">
              <p className="bold-text">To look at my code:</p>
              <div className="link-container">
                <a className="links" target="_blank" rel="noopener noreferrer" href="https://www.github.com/lysautumn">
                  <FontAwesomeIcon className="icons" icon={ faGithub } />
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="card column is-one-quarter">
            <div className="card-content">
              <p className="bold-text">To see some designs I've worked on:</p>
              <div className="link-container">
                <a className="links" target="_blank" rel="noopener noreferrer" href="https://www.dribbble.com/allyboyd">
                  <FontAwesomeIcon className="icons" icon={ faDribbble } />
                  Dribbble
                </a>
              </div>
            </div>
          </div>
          <div className="card column is-one-quarter">
            <div className="card-content">
              <p className="bold-text">To learn more about my career:</p>
              <div className="link-container">
                <a className="links" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alyssaboyd">
                  <FontAwesomeIcon className="icons" icon={ faLinkedin } />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="card column is-one-quarter">
            <div className="card-content">
              <p className="bold-text">To find out what I'm currently reading:</p>
              <div className="link-container">
                <a className="links" target="_blank" rel="noopener noreferrer" href="https://www.goodreads.com/allyboyd">
                  <FontAwesomeIcon className="icons" icon={ faGoodreads } />
                  Goodreads
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default ContactPage;
