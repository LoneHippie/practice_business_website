import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

import Check from '../images/check.svg';

import * as classes from './TalkingPoint.module.scss';

const TalkingPoint = (props) => {

    const { title, text } = props;

    const itemRef = useRef();
    const inView = useOnScreen(itemRef);

    return (
        <div 
            className={classes.container} 
            style={{
                opacity: inView ? '1' : '0',
                transform: inView ? 'translateX(0)' : 'translateX(-15rem)',
                transition: 'all 650ms'
            }}
            ref={itemRef}
        >
            <div className={classes.info}>
                <img 
                    src={Check}
                    aria-hidden="true"
                    alt=""
                />
                <h4>{title}</h4>
            </div>
            <p>{text}</p>
        </div>
    )
};

export default TalkingPoint;