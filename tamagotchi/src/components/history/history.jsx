import React from 'react'

function History(props) {
    var log = props.log.split('_')
    return (
        <React.Fragment>
            <span>{props.id}) {log[0]}</span>
            <span>{log[1]}</span>
        </React.Fragment>
    )
}

export default History