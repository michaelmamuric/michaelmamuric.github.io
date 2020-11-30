import React from 'react';
import { Link } from 'gatsby';
import classes from '../Header.module.css';

const MenuItems = () => {

    const items = [
        { link: '#about', displayText: 'About'},
        { link: '#projects', displayText: 'Projects'},
        { link: '#contact', displayText: 'Contact'},
    ];

    return (
        <nav className={classes.MenuItems}>
        {
            items.map((item, index) => {
                return <Link key={item.link} to={item.link} className={classes.Link}>{item.displayText}</Link>
            })
        }
        </nav>
    )
}

export default MenuItems;