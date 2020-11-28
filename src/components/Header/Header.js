import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import MenuItems from './MenuItems/MenuItems';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Grid item xs={12} className={classes.Header}>
            <IconButton edge="start" color="inherit">
                <MenuIcon />
            </IconButton>
            <MenuItems />
        </Grid>
    )
}

export default Header;