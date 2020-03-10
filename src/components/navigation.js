import React from 'react';
import { Link } from 'gatsby';
import scrollToElement from 'scroll-to-element';

const Navigation = ({ displayHomeLink }) => (
  <nav>
    {displayHomeLink && (
      <ul className="menu left">
        <li className="menu__item">
          <Link to="/" className="link link--dark">
            <i className="fa fa-arrow-left"></i> Retour
          </Link>
        </li>
      </ul>
    )}
    <ul className="menu">
      <div className="menu__item toggle">
        <span></span>
      </div>
      <li className="menu__item">
        <Link
          to="/#projects"
          className="link link--dark"
          onClick={e => {
            if (typeof window !== 'undefined') {
              if (window.location.pathname === '/') {
                if (e) e.preventDefault();
                scrollToElement('#projects', {
                  offset: -180, // Offset a fixed header if you please
                  duration: 1000
                });
              }
            }
          }}
        >
          <i className="fa fa-code"></i> Réalisations
        </Link>
      </li>
      <li className="menu__item">
        <Link
          to="/#posts"
          className="link link--dark"
          onClick={e => {
            if (typeof window !== 'undefined') {
              if (window.location.pathname === '/') {
                if (e) e.preventDefault();
                scrollToElement('#posts', {
                  offset: -180, // Offset a fixed header if you please
                  duration: 1000
                });
              }
            }
          }}
        >
          <i className="fa fa-book"></i> Publications
        </Link>
      </li>
      <li className="menu__item">
        <Link
          to="/#cv"
          className="link link--dark"
          onClick={e => {
            if (typeof window !== 'undefined') {
              if (window.location.pathname === '/') {
                if (e) e.preventDefault();
                scrollToElement('#cv', {
                  offset: -60, // Offset a fixed header if you please
                  duration: 1000
                });
              }
            }
          }}
        >
          <i className="fa fa-briefcase"></i> Expériences
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
