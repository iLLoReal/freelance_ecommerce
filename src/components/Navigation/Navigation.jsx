import React from 'react';
import { NavButton } from './NavButton/NavButton';
import { NavMenu } from './NavMenu/NavMenu';

import "./Navigation.css";

export function Navigation({ menuItems }) {
    return (
        <nav className="nav-container">
            <NavButton />
            <NavMenu
                menuItems={menuItems}
            />
        </nav>
    )
}
