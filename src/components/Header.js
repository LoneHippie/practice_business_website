import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

import NavMobileFloat from './NavMobileFloat';
import NavDesktop from './NavDesktop';

import * as classes from './Header.module.scss';

import Logo from './../images/icon.png';

const Header = () => {

    const { screenWidth} = useWindowDimensions();

    const links = ['about', 'services', 'prices', 'contact'];

    return (
        <header className={classes.header}>

            <img 
                className={classes.header__logo}
                src={Logo}
                alt="name of company"
                aria-hidden="true"
            />

            {
                screenWidth < 768 ? (
                    <NavMobileFloat 
                        links={links}
                    />
                ) : (
                    <NavDesktop 
                        links={links}
                    />
                )
            }

        </header>
    )
};

export default Header;