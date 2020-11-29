import React from 'react';
import { Link } from 'gatsby';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import MenuItems from './MenuItems/MenuItems';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Grid item className={classes.Header}>
            <Link to="/">
                <img src={'./mylogo.png'} alt="Logo" className={classes.Logo} />
            </Link>
            <div className={classes.Icon}>
                <IconButton color="inherit">
                    <MenuIcon fontSize="large" />
                </IconButton>
            </div>
            <MenuItems />
        </Grid>
    )
}

export default Header;