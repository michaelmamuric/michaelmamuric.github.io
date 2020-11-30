import React from 'react';
import Grid from '@material-ui/core/Grid';
import classes from './About.module.css';
import { Link } from 'gatsby';

const About = () => {
  return (
      <Grid id="about" item xs={12} className={classes.AboutGrid}>
          <h1>Hi, I'm Michael.</h1>
          <p>
            I'm a Software Developer originally from the Philippines. My family and I moved to Canada in 2017. I have always been fascinated by technology, how dynamic it is,
            and how we always have to be constantly learning about new industry trends.
          </p>
          <p>
            I have a Bachelor's Degree in Information Technology from <Link to="https://www.dlsud.edu.ph">De La Salle University - Dasmariñas</Link>,
            and a Diploma in Information Technology from the <Link to="https://www.sait.ca">Southern Alberta Institute of Technology (SAIT)</Link>.
            I have 3 years experience as a Software Engineer back in the Philippines. My main line of work
            was mainly on database programming and testing in Oracle and PL/SQL, but recently, I have taken more
            interest in Full-Stack Web Development.
          </p>
      </Grid>
  )
}

export default About;