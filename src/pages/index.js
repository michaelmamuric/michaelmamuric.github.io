import React from 'react';
import Layout from '../components/Layout/Layout';
import WelcomeBanner from '../components/WelcomeBanner/WelcomeBanner';
import Grid from '@material-ui/core/Grid';
import 'fontsource-titillium-web';
import './index.css';

const Home = () => {
  return (
    <Layout>
      <Grid item xs={12}>
        <WelcomeBanner />
      </Grid>
    </Layout>
  )
}

export default Home;