import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header';

const Layout = (props) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Header />
            </Grid>
            {props.children}       
         </Grid>
    )
}

export default Layout;