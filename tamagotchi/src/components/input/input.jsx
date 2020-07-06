import React from 'react';
import './input.scss';

function Input() {
    return (
        <textarea type="text" name="commands" wrap="soft" disabled="true" placeholder="Insert your command..." />
    )
}

export default Input