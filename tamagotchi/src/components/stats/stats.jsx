import React from 'react'

function Stat(props) {
    return (
        <div className='stat'>
            <span className='stat-title'>{props.stat}:</span>
            <div className='stat_value-wrapper'>
                <div className={props.class} style={{ width: props.value + '%' }}></div>
            </div>
        </div>
    )
}

export default Stat