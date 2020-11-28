import React from 'react';
import { Link } from 'gatsby';
import classes from '../Header.module.css';

const MenuItems = () => {
    return (
        <ul className={classes.MenuItems}>
            <li><Link to="/about" className={classes.Link}>About</Link></li>
            <li><Link to="/projects" className={classes.Link}>Projects</Link></li>
            <li><Link to="/contact" className={classes.Link}>Contact</Link></li>
        </ul>
    )
}

export default MenuItems;