import React from 'react';
import Layout from '../components/Layout/Layout';
import WelcomeBanner from '../components/WelcomeBanner/WelcomeBanner';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Helmet from 'react-helmet';
import 'fontsource-titillium-web';
import './index.css';

const Home = () => {
  return (
    <Layout>
      <Helmet>
            <meta charset="utf-8" />
            <title>Michael Mamuric: Software/Web Developer</title>
            <meta name="keywords" content="Software Developer, Web Developer, Portfolio, Michael Mamuric, Mamuric, Michael Thomas Mamuric" />
            <meta name="description" content="Personal Portfolio of Michael Mamuric" />
            <meta name="google-site-verification" content="cE75Ydj0nQ3VYRAca12N2Q1U_nwDrbfPQJbA6m1TeKA" />
            <meta name="author" content="Michael Mamuric" />
      </Helmet>
      <WelcomeBanner />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default Home;