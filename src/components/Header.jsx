import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 5rem;
  display: flex;
  background-color: ${props => props.theme.normal};
  box-shadow: 0 1px 2px ${props => props.theme.shadow};
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  margin: auto 0;
  padding-left: 2rem;
`;

const StyledLink = styled(Link)`
  color: #fff;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Title>
      <StyledLink to="/">{siteTitle}</StyledLink>
    </Title>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
