import React from 'react';

const Footer = () => (
  <footer>
    <span>
      Made with <span>♥</span> by{' '}
    </span>
    <a
      href="https://twitter.com/zaratan"
      className="twitter-link Footer__FooterLink-sc-10p5xp5-1 dYmKxa"
    >
      @zaratan
    </a>{' '}
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
);

export default Footer;
