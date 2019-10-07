/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Container from '@material-ui/core/Container';

import Header from "./header"
import "./layout.css"

const Layout = ({ children, title, path }) => <Container maxWidth='md'>
  <Header siteTitle={title} titlePath={path} />
  <main>{children}</main>
  <footer style={{fontSize: `.8rem`}}>
    © {new Date().getFullYear()}, <Link to='/'>Wen Zhu</Link>, All rights reserved.
  </footer>
</Container>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  path: PropTypes.node.isRequired,
}

export default Layout
