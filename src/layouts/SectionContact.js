import React from 'react';

import ContactFormBasic from '../components/ContactFormBasic';

import BackgroundImage from '../images/background-city.jpg';

import * as classes from './SectionContact.module.scss';

const SectionContact = () => {

    return (
        <section className={classes.section} id="contact">

            <h2>Title of <strong>section</strong></h2>

            <div className={classes.container}>

                <div className={classes.hero}>

                    <img 
                        src={BackgroundImage}
                        aria-hidden={true}
                        alt=""
                        loading="eager"
                    />

                    <h3>Get in touch</h3>
                    <h4>(+072)052-555-5555</h4>
                    <h4>smallbusiness@gmail.com</h4>
                </div>

                <ContactFormBasic />

            </div>

        </section>
    )
};

export default SectionContact;