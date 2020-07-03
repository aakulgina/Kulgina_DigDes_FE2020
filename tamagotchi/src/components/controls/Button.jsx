import React from 'react';
import './button.scss'

function Button (props) {

    const randomizer = (min, max) => {
        const randInt = min + Math.random() * (max + 1 - min);
        return Math.floor(randInt)
    }
    
    const hp = randomizer(-2, 2)

    const energy = randomizer(0, 5)

    return (
        <button className={props.class}
                type="button"
                onClick={() => {props.updateData(props.value1 - 10,
                                        props.value2 + hp,
                                        props.value3 - energy);}}>
            {props.text}
        </button>
    )
}

export default Button