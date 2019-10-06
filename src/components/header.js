import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';

const Header = ({ siteTitle, titlePath }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <BackgroundImage
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem 0 0.0875rem`,
      }}
    >
      <h1 style={{ marginBottom: `1.45rem` }}>
        <Link
          to={titlePath}
          style={{
            color: `#3b3b41`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav aria-label="Navigation Menu">
          <ul style={{
            listStyleType: `none`,
            display: `flex`,
          }}>
            <NavItem text='Blog' href='/blog/' titlePath={titlePath} />
            <NavItem text='Reading' href='/reading/' titlePath={titlePath} />
            <NavItem text='About' href='/me/' titlePath={titlePath} />
          </ul>
      </nav>
    </BackgroundImage>
  </header>
};

const NavItem = ({text, href, titlePath}) => <li style={{
  marginRight: `0.65rem`,
}} className={titlePath === href ? 'current' : ''}>
  <Link to={href} style={{color: `#3b3b41`,}}>{text}</Link>
</li>;

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
