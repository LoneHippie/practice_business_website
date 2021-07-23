import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';

import logo from '../images/icon.png';

import * as classes from './LayoutBasic.module.scss';

const LayoutBasic = (props) => {

    return (
        <main className={classes.layout_container}>

            <Helmet htmlAttributes={{ lang: 'en' }}>
                <title>Gatsby Static Template</title>
                <link rel="icon" href={logo} />
                <meta name="title" content="Gatsby static template" />
                <meta name="description" content="A Gatsby static template for rapid static site development" />
            </Helmet>

            <section className={classes.layout_content}>
                <Header />
                <section className={classes.layout_body}>
                    {props.children}
                </section>
            </section>
            <Footer />
        </main>
    )
};

export default LayoutBasic;