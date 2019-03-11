import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SectionHeader from '../styles/SectionHeader';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <SectionHeader>À propos</SectionHeader>
    <p>
      Ce site est une tentative de sauvegarder et de mettre a disposition sous
      une forme plus récente les données des{' '}
      <a href="http://bindusara.free.fr">Litanies de Sang</a>.
    </p>
    <p>
      Les contributions sont les bienvenues à cette addresse:{' '}
      <a href="https://github.com/denispasin/vampire">
        https://github.com/denispasin/vampire
      </a>
    </p>
    <p>
      Les informations de ce site concernent la gamme de Jeu de Role du Monde de
      Ténèbres, copyright de{' '}
      <a href="http://www.white-wolf.com">White Wolf Publishing Inc.</a> © 2002
      édité en version Française par Hexagonal © 2002.
    </p>
  </Layout>
);

export default AboutPage;
