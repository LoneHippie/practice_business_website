import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

import TextGroupBasic from './TextGroupBasic';

import * as classes from './InfoCardBasic.module.scss';

const InfoCardBasic = (props) => {

    const ref = useRef();
    const inView = useOnScreen(ref);

    return (
        <div 
            className={classes.card} 
            style={{
                opacity: inView ? '1' : '0',
                transform: inView ? 'translateX(0)' : 'translateX(-15rem)',
                transition: 'all 650ms' 
            }}
            ref={ref}
        >
            { 
                props.coverImage ? (
                    <img 
                        src={props.coverImage}
                        className={classes.card_image}
                        aria-hidden={true}
                        alt=""
                        loading="eager"
                    />
                ) : null
            }
            <div className={classes.card_info}>
                <TextGroupBasic 
                    title={props.title}
                    text={props.text}
                />
            </div>
        </div>
    )
};

export default InfoCardBasic;