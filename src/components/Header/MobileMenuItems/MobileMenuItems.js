import React from 'react';
import { Link } from 'gatsby';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MobileMenuItems = (props) => {
    return (
        <List onClick={props.close} style={{fontFamily: 'Titillium Web'}}>
            <ListItem button component={Link} to="#about">
                <ListItemText>About Me</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="#projects">
                <ListItemText>My Projects</ListItemText>
            </ListItem>
        </List>
    )
}

export default MobileMenuItems;