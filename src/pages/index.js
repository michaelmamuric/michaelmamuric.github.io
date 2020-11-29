import React from 'react';
import Layout from '../components/Layout/Layout';
import WelcomeBanner from '../components/WelcomeBanner/WelcomeBanner';
import Grid from '@material-ui/core/Grid';
import './index.css';

const Home = () => {
  return (
    <Layout>
      <Grid item xs={12}>
        <WelcomeBanner />
      </Grid>
      <Grid item xs={12} className="MainContent">
        <Grid container>
          <Grid item xs={12} sm={4}>
          </Grid>
          <Grid item xs={12} sm={8}>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Home;