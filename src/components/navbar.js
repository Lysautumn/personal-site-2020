import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './navbar.scss';

const NavBar = ({ siteTitle }) => (
  <nav className="level" aria-label="navigation">
    <div className="level-left">
      <div className="level-item">
        <Link className="title is-1" to="/"><span className="navbar-text nav-title">{ siteTitle }</span></Link>
      </div>
    </div>
    <div className="level-right">
      <div className="level-item">
        <Link className="navbar-text" to="/about/">About</Link>
      </div>
      <div className="level-item">
        <Link className="navbar-text" to="/contact/">Contact</Link>
      </div>
    </div>
  </nav>
);

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar;
