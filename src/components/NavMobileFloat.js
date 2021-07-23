import React from 'react';

import * as classes from './NavMobileFloat.module.scss';

const NavMobileFloat = (props) => {

    function scrollSmoothTo(elementId) {
        const element = document.getElementById(elementId);
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            document.getElementById('nav-toggle').checked = false;
        }, 300);
    };

    const navLinks = () => {
        return props.links?.map((link, index) => 
        <li className={classes.nav_btn__item} key={`nav-link-${index}`}>
            <button 
                aria-label={`go to ${link} section`}
                onClick={() => scrollSmoothTo(link)} 
                className={classes.nav_btn__link}
            >{link}</button>
        </li>
        )
    };

    return (
        <div className={classes.nav_btn}>

            <input type="checkbox" className={classes.nav_btn__checkbox} id="nav-toggle"></input>
            
            <label htmlFor="nav-toggle" className={classes.nav_btn__button}>
                <span className={classes.nav_btn__icon}>&nbsp;</span>
            </label>

            <div className={classes.nav_btn__background}>&nbsp;</div>

            <nav className={classes.nav_btn__nav}>

                <ul className={classes.nav_btn__list}>
                    { navLinks() }
                </ul>
            </nav>

        </div>
    )
};

export default NavMobileFloat;