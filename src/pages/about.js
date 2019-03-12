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
    <p>
      Si vous voulez me proposer des choses à ajouter, n'hésitez pas a ouvrir
      une issue sur Github ou par ici:{' '}
      <a href="https://subox-front.herokuapp.com/suggestions/9076bc4b-0a03-400c-a34b-2c5d76f087ab">
        Subox.co
      </a>
    </p>
  </Layout>
);

export default AboutPage;
