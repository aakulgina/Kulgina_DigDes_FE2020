import React from 'react';
import './button.scss'

function Button (props) {

    const random = (min, max) => {
        const randInt = min + Math.random() * (max + 1 - min);
        return Math.floor(randInt)
    }

    var type = []
    var changes = []

    if (props.class==="eat") {
        type = ['hunger', 'health', 'fatigue']
        changes = [10, random(-2, 2), random(5, 10)]
    } else if (props.class==="drink") {
        type = ['thirst', 'health', 'fatigue']
        changes = [10, random(-1, 1), random(10, 15)]
    } else if (props.class==="work") {
        type = ['thirst', 'hunger', 'fatigue', 'health']
        changes = [random(-40, -30), random(-20, -10), random(-35, -25), random(15, 25)]
    } else if (props.class==="sport") {
        type = ['health', 'hunger', 'thirst', 'fatigue']
        changes = [random(-10, -1), -1*Math.floor(props.values[1]*0.1),
                -1*Math.ceil(props.values[2]*0.08), random(-25, -20)]
    }

    return (
        <button className={props.class}
                type="button"
                onClick={() => {props.updateData(type, props.values, changes);}}>
            {props.text}
        </button>
    )
}

export default Button