/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Navigation from './navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <footer className="footer">
        <ul className="footer--links">
          <li className="footer--links__item">
            made with <i className="fa fa-heart text--red"></i> and <a href="https://www.gatsbyjs.org/" className="link link--white">Gatsby</a>
          </li>
        </ul>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
