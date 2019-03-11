import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.shadow};
  color: #fff;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.3rem;
`;

const FooterComponent = styled.span`
  margin 0 0.4rem;

  @media only screen and (max-width: 710px) {
    font-size: 1.3rem;
  }
  
  @media only screen and (max-width: 307px) {
    font-size: 1rem;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.accent};
`;

const Heart = styled.span`
  transition: color 4s ease-in-out;
  :hover {
    transition: color 0.4s ease-in-out;
    color: red;
  }
`;

const Footer = () => (
  <StyledFooter>
    <FooterComponent>
      Made with <Heart>♥</Heart> by{' '}
      <Link
        href="https://twitter.com/zaratan"
        target="_blank"
        rel="noopener noreferrer"
      >
        @zaratan
      </Link>
      {` `}© {new Date().getFullYear()},
    </FooterComponent>
    <FooterComponent>
      Built with{` `}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.gatsbyjs.org"
      >
        Gatsby
      </Link>
      ,
    </FooterComponent>
    <FooterComponent>
      Data from{` `}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="http://bindusara.free.fr"
      >
        Les Litanies de Sang
      </Link>
      .
    </FooterComponent>
  </StyledFooter>
);

export default Footer;
