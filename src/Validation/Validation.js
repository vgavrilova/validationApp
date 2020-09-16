import React from 'react';

const validation = (props) => {

    let para;
    if(props.length <= 5){
        para = `Text is too short. Add ${6-props.length} character(s) more.`;
    } else {
        para = "Text is long enough.";
    }
    return (
        <div>
            <p>{para}</p>
        </div>
    );
}

export default validation;
