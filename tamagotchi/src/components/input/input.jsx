import React from 'react';
import './input.scss';

function Input(props) {

    return (
        <textarea type="text" id="commands" wrap="soft" placeholder="Insert your command..."
            onChange={() => {
                 document.addEventListener('keyup', (event) =>
                 {
                     const keyName = event.key
                     if (keyName === 'Enter') {
                         var user_command = document.getElementById('commands').value
                         user_command = user_command.slice(0, -1)
                         props.handle(user_command)
                         document.getElementById('commands').value=''
                     }
                 })
                }
            }
        />
    )
}

export default Input