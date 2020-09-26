import React, { useState } from 'react';

import './Card.scss';

const Card = (props) => {

    const [visible, makeVisible] = useState(0);

    const hoverHandler = () => {
       visible === 0 ? makeVisible(1) : makeVisible(0);
    }

    return (
        <div 
            className='card' 
            onMouseEnter={hoverHandler} 
            onMouseLeave={hoverHandler}
        >
            <h4 className={visible === 0 ? 'card-show' : 'card-hide'}>{props.title}</h4> 
            <p className={visible === 1 ? 'card-show' : 'card-hide'}>
                {props.descr} 
            </p>
            <p className='card-icon'>{props.children}</p>
        </div>
        
    );
};

export default Card;