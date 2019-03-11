/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCaretRight,
  faCaretDown,
  faLink,
} from '@fortawesome/free-solid-svg-icons';

import theme from '../styles/theme';
import Header from './Header';
import Footer from './Footer';
import GlobalStyle from '../styles/GlobalStyle';

library.add(faCaretDown);
library.add(faCaretRight);
library.add(faLink);

const Main = styled.main`
  @media only screen and (max-width: 980px) {
    padding: 0 1rem;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          <Main>{children}</Main>
          <Footer />
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
