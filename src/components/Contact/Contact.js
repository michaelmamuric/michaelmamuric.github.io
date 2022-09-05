import React from 'react';
import Grid from '@material-ui/core/Grid';
import classes from './Contact.module.css';
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
  return (
      <Grid id="contact" item xs={12} className={classes.ContactGrid}>
          <Grid container>
            <Grid item xs={12} className={classes.DetailsGrid}>
                <img src={'./mylogo.png'} alt="MyLogo" className={classes.FooterImg} />
            </Grid>
            <Grid item xs={12} className={classes.DetailsGrid}>
                <h1>Here is where to find and reach me.</h1>
            </Grid>
            <Grid item xs={12} className={classes.DetailsGrid}>
                <SocialIcon className={classes.SocialIcon} url='mailto:michael.mamuric@gmail.com' bgColor='#000000'/>
                &nbsp;&nbsp;
                <SocialIcon url='https://github.com/michaelmamuric' bgColor='#000000' />
            </Grid>
            <Grid item xs={12} className={classes.FooterGrid}>
              <p>
                  &#169; 2020 by Michael Mamuric
              </p>
            </Grid>
          </Grid>
      </Grid>
  )
}

export default Contact;