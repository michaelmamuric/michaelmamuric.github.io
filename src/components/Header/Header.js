import React, { useState } from 'react';
import { Link } from 'gatsby';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import MenuItems from './MenuItems/MenuItems';
import MobileMenuItems from './MobileMenuItems/MobileMenuItems';
import classes from './Header.module.css';

const Header = (props) => {
    
    // States
    const [drawer, setDrawer] = useState(false);

    return (
        <Grid item className={classes.Header}>
            <Drawer open={drawer} onClose={() => setDrawer(false)} anchor="right">
                <MobileMenuItems close={() => setDrawer(false)} />
            </Drawer>
            <Link to="/">
                <img src={'./mylogo.png'} alt="Logo" className={classes.Logo} />
            </Link>
            <div className={classes.Icon}>
                <IconButton color="inherit" onClick={() => setDrawer(true)}>
                    <MenuIcon fontSize="large" />
                </IconButton>
            </div>
            <MenuItems />
        </Grid>
    )
}

export default Header;