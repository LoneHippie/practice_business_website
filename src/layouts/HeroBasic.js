import React from 'react';

import * as classes from './HeroBasic.module.scss';

const HeroBasic = () => {

    return (
        <section className={classes.hero}>

            <h1>Tea House</h1>

            <div className={classes.cta}>

                <button>
                    Get in touch
                </button>
                <button>
                    Services
                </button>

            </div>

        </section>
    )
};

export default HeroBasic;