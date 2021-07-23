import React from 'react';

import * as classes from './Footer.module.scss';

const Footer = () => {

    return (
        <footer className={classes.footer}>
            <h3>Created by Company Name &#169;&nbsp;2021</h3>

            <div className={classes.contact_info}>
                <span>(+999)99-999-9999</span>
                <span>smallbusiness@gmail.com</span>
            </div>
        </footer>
    )
};

export default Footer;