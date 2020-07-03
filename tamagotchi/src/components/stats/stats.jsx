import React from 'react';

function Stat(props) {
    return (
        <span style={{width: 340+'px'}}>{props.stat}: {props.value}</span>
    )
}

export default Stat