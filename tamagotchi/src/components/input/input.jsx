import React from 'react'

function Input(props) {

    return (
        <textarea
            type='text' wrap='soft' placeholder='Insert your command...'
            onKeyUp={({ target, key }) =>  {
                if (key === 'Enter') {
                    props.onEnter(target.value.slice(0, -1))
                    target.value=''
                }
            }}
        />
    )
}

export default Input