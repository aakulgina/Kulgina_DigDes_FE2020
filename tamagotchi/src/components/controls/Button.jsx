import React from 'react'

function Button (props) {

    return (
        <button className={props.class} type='button'
                onClick={() => {props.onClick(props.class, props.values)}}>
            {props.children}
        </button>
    )
}

export default Button