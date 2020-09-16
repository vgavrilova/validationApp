import React from 'react';
import Char from './Char.css';

const char = (props) => {
    return (<div className="charDiv" onClick={props.click}>
        {props.ownChar}
    </div>);
}

export default char;