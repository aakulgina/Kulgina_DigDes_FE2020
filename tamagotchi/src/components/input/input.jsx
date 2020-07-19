import React from 'react'

function Input(props) {

    return (
        props.active === 'true' ? (
            <textarea
            type='text' wrap='soft' placeholder='Insert your command...'
            onKeyUp={({ target, key }) =>  {
                if (key === 'Enter') {
                    props.onEnter(target.value.slice(0, -1))
                    target.value=''
                }
            }}
        />
        ) : (
            <textarea
            type='text' wrap='soft' placeholder='Insert your command...'
            disabled={true}
        />
        )
    )
}

export default Input