import React from 'react'

function Button (props) {

    return (
        props.active === 'true' ? (
            <button className={props.class} type='button'
                    onClick={() => {props.onClick(props.class, props.values, props.log)}}>
                {props.children}
            </button>
        ) : (
            <button className={props.class} type='button' disabled={true}>
                {props.children}
            </button>
        )
    )
}

export default Button