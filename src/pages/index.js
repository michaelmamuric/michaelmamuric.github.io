import React from 'react';
import Layout from '../components/Layout/Layout';
import WelcomeBanner from '../components/WelcomeBanner/WelcomeBanner';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import 'fontsource-titillium-web';
import './index.css';

const Home = () => {
  return (
    <Layout>
      <WelcomeBanner />
      <About />
      <Projects />
    </Layout>
  )
}

export default Home;