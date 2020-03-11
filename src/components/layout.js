import React from 'react';
import PropTypes from 'prop-types';

import 'aos/dist/aos.css';

import '../styles/global.css';
import '../styles/landing.css';
import '../styles/article.css';

import Navigation from './navigation';

const Layout = ({ children, displayHomeLink = false }) => {
  return (
    <>
      <Navigation displayHomeLink={displayHomeLink} />
      {children}
      <footer className="footer">
        <ul className="footer--links">
          <li className="footer--links__item">
            <a href="https://github.com/jbehuet" className="link link--white">
              <i className="fa fa-github"></i> Github
            </a>
          </li>
          <li className="footer--links__item">
            <a
              href="https://fr.linkedin.com/in/jbehuet"
              className="link link--white"
            >
              <i className="fa fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li className="footer--links__item">
            <a href="https://twitter.com/jbehuet" className="link link--white">
              <i className="fa fa-twitter"></i> Twitter
            </a>
          </li>
        </ul>
        <br />
        <ul className="footer--links">
          <li className="footer--links__item">
            made with <i className="fa fa-heart text--red"></i> and{' '}
            <a href="https://www.gatsbyjs.org/" className="link link--white">
              Gatsby
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
