// @flow

import { Link } from 'gatsby';
import React from 'react';
import styled, { type StyledComponent } from 'styled-components';
import type { ThemeType } from '../styles/theme';

const StyledHeader: StyledComponent<{}, ThemeType, HTMLElement> = styled.header`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: ${props => props.theme.normal};
  box-shadow: 0 1px 2px ${props => props.theme.shadow};
  margin-bottom: 2rem;

  @media only screen and (max-width: 300px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  padding: 0 0 0 2rem;
  color: #fff;
  font-size: 2.8rem;
  margin: 0;
  height: 5rem;
  line-height: 5rem;

  @media only screen and (max-width: 500px) {
    padding: 0 0 0 1rem;
    font-size: 2rem;
  }

  @media only screen and (max-width: 380px) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 340px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 300px) {
    height: 3rem;
    line-height: 3rem;
    font-size: 2rem;
  }
`;

const About = styled(Title)`
  padding: 0 2rem 0 0;
  font-weight: 300;
  font-size: 1.2rem;
  opacity: 0.8;

  @media only screen and (max-width: 500px) {
    padding: 0 1rem 0 0;
    font-size: 1rem;
  }

  @media only screen and (max-width: 380px) {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 340px) {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 300px) {
    font-size: 1rem;
    height: 2rem;
    line-height: 2rem;
    align-self: flex-end;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
`;

const Header = ({ siteTitle }: { siteTitle?: string }) => (
  <StyledHeader>
    <Title>
      <StyledLink to="/">{siteTitle}</StyledLink>
    </Title>
    <About>
      <StyledLink to="/about">À propos</StyledLink>
    </About>
  </StyledHeader>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
