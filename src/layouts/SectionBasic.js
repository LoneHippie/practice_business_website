import React from 'react';

import TextGroupBasic from '../components/TextGroupBasic';

import BlobLight from '../images/blob-1.svg';
import BlobDark from '../images/blob-2.svg';

import * as classes from './SectionBasic.module.scss';

const SectionBasic = () => {

    return (
        <section className={classes.section} id="about">

            <div className={classes.background_vector}>
                <img 
                    src={BlobLight} 
                    aria-hidden="true"
                    alt=""
                    loading="eager"
                />
                <img 
                    src={BlobDark} 
                    aria-hidden="true"
                    alt=""
                    loading="eager"
                />
            </div>

            <div className={classes.container}>
                
                <h2>Title of <strong>section</strong></h2>

                <TextGroupBasic 
                    title={'A small business'}
                    text={'ksjd aksjd aksjdaks jdaskdjk jskdjs kdjsksjd ksjdksj dksjd skj skjdksj dksjd ksjdskks  ksk ksksksk skkkkks axxx xxx xxxxxx xxxx'}
                />

                <TextGroupBasic 
                    title={'Service with a smile'}
                    text={'Testier msa ks kemoas pasm cloektp you asre lalc clocks water righous asdl drink acan caaanan waondw woekr chao clp plesa explcia ska'}
                />

            </div>

        </section>
    )
};

export default SectionBasic;