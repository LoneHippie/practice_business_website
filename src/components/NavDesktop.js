import React from 'react';

import * as classes from './NavDesktop.module.scss';

const NavDesktop = (props) => {

    function scrollSmoothTo(elementId) {
        const element = document.getElementById(elementId);
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    };

    const navLinks = () => {
        return props.links?.map((link, index) => 
            <button 
                key={`nav-link-${index}`}
                aria-label={`go to ${link} section`} 
                onClick={() => scrollSmoothTo(link)}
            >{link}</button>
        )
    }

    return (
        <nav className={classes.nav}>
            { navLinks() }
        </nav>
    )
};

export default NavDesktop;