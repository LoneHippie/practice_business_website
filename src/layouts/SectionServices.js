import React from 'react';

import TextGroupBasic from '../components/TextGroupBasic';
import TalkingPoint from '../components/TalkingPoint';

import Services from '../images/services.svg';

import * as classes from './SectionServices.module.scss';

const SectionServices = () => {

    return (
        <section id="services" className={classes.section}>

            <div className={classes.background_vector}>
                <img 
                    src={Services}
                    aria-hidden="true"
                    alt=""
                    loading="lazy"
                />
            </div>

            <div className={classes.container}>

                <h2>Title of <strong>section</strong></h2>

                <TextGroupBasic 
                    title="What we do"
                    text="Her ashd js jalw u nc vudkxic oxicxoz xx asd a asds is ua bord as k comapa socjskanc slsaskcsms ,s daskd"
                />

                <div className={classes.list_container}>

                    <TalkingPoint 
                        title={'Custom designs'}
                        text={'Our designs are hand coded from scratch to fit your exact needs'}
                    />
                    
                    <TalkingPoint 
                        title={'SEO'}
                        text={'Show up higher in Google search rankings'}
                    />

                    <TalkingPoint 
                        title={'Performance boost'}
                        text={'Get the best performance possible with handcrafted designs'}
                    />

                    <TalkingPoint 
                        title={'Unlimited edits'}
                        text={'Don\'t like something? We\'ll change it for free'}
                    />

                    <TalkingPoint 
                        title={'24/7 support'}
                        text={'Get support anytime you need it'}
                    />

                </div>
                
            </div>

        </section>
    )
};

export default SectionServices;