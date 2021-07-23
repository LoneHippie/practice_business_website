import React from 'react';

import InfoCardBasic from '../components/InfoCardBasic';

import * as classes from './SectionCards.module.scss';

import Savings from '../images/savings.svg';
import Performance from '../images/performance.svg';
import Increase from '../images/increase.svg';

const SectionCards = () => {

    return (
        <section className={classes.section} id="prices">

            <h2>Title of <strong>Section</strong></h2>

            <div className={classes.card_container}>

                <InfoCardBasic 
                    coverImage={Savings}
                    title={'Spend less'}
                    text={'We offer competitive pricing that will save your business money in the long term'}
                />

                <InfoCardBasic 
                    coverImage={Performance}
                    title={'Better Performance'}
                    text={'Be faster and more efficient than ever with significant performance boosts'}
                />

                <InfoCardBasic 
                    coverImage={Increase}
                    title={'Better growth'}
                    text={'Get better results and customer growth with analytics and mobile first design'}
                />

            </div>

        </section>
    )
};

export default SectionCards;