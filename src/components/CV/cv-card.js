import React from 'react';

import './Cv.scss';

const cvCard = (props) => {
    return (
        <>
            <p className='date'>{props.date}</p>
            <p className='content'>{props.content}</p>
        </>
    )
}

export default cvCard;