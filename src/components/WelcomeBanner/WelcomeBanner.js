import React from 'react';
import Grid from '@material-ui/core/Grid';
import classes from './WelcomeBanner.module.css';

const WelcomeBanner = (props) => {
    return (
        <Grid item xs={12} className={classes.Banner}>
            <div>
                <img src={'./Me.jpg'} alt="Michael Mamuric" className={classes.DevImg}/>
            </div>
            <div className={classes.Name}>
                Michael Mamuric
            </div>
            <div className={classes.Desc}>
                Software and Web Developer
            </div>
        </Grid>
    )
}

export default WelcomeBanner;