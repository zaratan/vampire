import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.normal};
  box-shadow: 0 1px 2px ${props => props.theme.shadow};
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  margin: auto 0;
  padding: 0 2rem;
  color: #fff;
`;

const About = styled(Title)`
  font-weight: 400;
  font-size: 1.6rem;
  opacity: 0.9;
`;

const StyledLink = styled(Link)`
  color: #fff;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Title>
      <StyledLink to="/">{siteTitle}</StyledLink>
    </Title>
    <About>
      <StyledLink to="/about">À propos</StyledLink>
    </About>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
