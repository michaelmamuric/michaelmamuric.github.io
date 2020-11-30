import React from 'react';
import { Link } from 'gatsby';
import classes from '../Header.module.css';

const MenuItems = () => {
    return (
        <nav className={classes.MenuItems}>
            <Link to="#about" className={classes.Link}>About</Link>
            <Link to="#projects" className={classes.Link}>Projects</Link>
            <Link to="#contact" className={classes.Link}>Contact</Link>
        </nav>
    )
}

export default MenuItems;