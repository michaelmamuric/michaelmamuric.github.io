import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import classes from './about.module.css';

const About = () => {
  return (
    <Layout>
      <Grid item xs={12} className={classes.NonHomeGrid}>
        <h1>About Me</h1>
        <p>
          Hi there! My name is Michael Mamuric. I am originally from the Philippines, and I
          moved to Canada in 2017. I have always been fascinated by technology, how dynamic it is,
          and how we always have to be constantly learning about new industry trends.
        </p>
        <p>
          I have a Bachelor's Degree in Information Technology from <Link to="https://www.dlsud.edu.ph">De La Salle University - Dasmariñas</Link>,
          and a Diploma in Information Technology, Major in Sotware Development from the <Link to="https://www.sait.ca">Southern Alberta Institute of Technology (SAIT)</Link>.
          I have briefly worked as a Software Developer back in the Philippines. My main line of work
          was database programming and testing in Oracle and PL/SQL, but recently I have taken more
          interest in Full-Stack Web Development.
        </p>
      </Grid>
    </Layout>
  )
}

export default About;