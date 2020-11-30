import React from 'react';
import { Link } from 'gatsby';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MobileMenuItems = (props) => {

    const items = [
        { link: '#about', displayText: 'About Me'},
        { link: '#projects', displayText: 'My Projects'},
        { link: '#contact', displayText: 'Contact Me'},
    ];

    return (
        <List onClick={props.close}>
        {
            items.map((item) => {
                return (
                    <ListItem key={item.link} button component={Link} to={item.link}>
                        <ListItemText>
                            <div style={{fontFamily: 'Titillium Web'}}>
                                {item.displayText}
                            </div>
                        </ListItemText>
                    </ListItem>
                )
            })
        }
        </List>
    )
}

export default MobileMenuItems;