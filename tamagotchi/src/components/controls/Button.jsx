import React from 'react';
import './button.scss';
import config from '../config'

function Button (props) {

    var {type, changes} = config(props.class, props.values)

    return (
        <button className={props.class}
                type="button"
                onClick={() => {props.updateData(type, props.values, changes);}}>
            {props.text}
        </button>
    )
}

export default Button