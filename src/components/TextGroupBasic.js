import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

import * as classes from './TextGroupBasic.module.scss';

const TextGroupBasic = (props) => {

    const ref = useRef();
    const inView = useOnScreen(ref);

    return (
        <div 
            className={classes.text_container}
            style={{
                opacity: inView ? '1' : '0',
                transform: inView ? 'translateY(0)' : 'translateY(10rem)',
                transition: 'all 650ms'
            }}
            ref={ref}
        >
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
};

export default TextGroupBasic;